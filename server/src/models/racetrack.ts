//@ts-nocheck

var { nanoid } = require('nanoid');
var neo4j = require('neo4j-driver');
require('dotenv').config();
var { url, db_username, db_password, database } = process.env;

const db_con = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = db_con.session({ database });

const findAll = async () => {
  const result = await session.run(`Match (r:Racetrack) return r`);
  return result.records.map((i) => i.get('r').properties);
};

const findById = async (id) => {
  const result = await session.run(
    `MATCH (r:Racetrack {_id : '${id}'} ) return r limit 1`
  );
  console.log(result.records[0].get('r').properties);
  return result.records[0].get('r').properties;
};

const create = async (racetrack) => {
  const unique_id = nanoid(8);
  await session.run(
    `CREATE (r:Racetrack {_id : '${unique_id}', name: '${racetrack.name}', image_url: '${racetrack.image_url}'} ) return r`
  );
  return await findById(unique_id);
};

const findByIdAndUpdate = async (id, racetrack) => {
  const result = await session.run(
    `MATCH (r:Racetrack {_id : '${id}'}) SET r.name= '${racetrack.name}', r.image_url= '${racetrack.image_url}' return r`
  );
  return result.records[0].get('r').properties;
};

const findByIdAndDelete = async (id) => {
  await session.run(`MATCH (r:Racetrack {_id : '${id}'}) DETACH DELETE r`);
  return await findAll();
};

const setWinner = async (racetrackId, driverId) => {
  const result = await session.run(`MATCH (d: Driver), (r: Racetrack)
  WHERE d._id = '${driverId}' AND r._id = '${racetrackId}'
  CREATE (d)-[won:WON_AT]->(r)
  RETURN r`);
  
  return result.records[0].get('r').properties;
}

const findWinner = async (id) => {
  const result = await session.run(`MATCH (u)-[w: WON_AT]-(r:Racetrack {_id : '${id}'}) RETURN u`)
  if (!result.records[0]) {
    return { name: 'Not', surname: 'set', image_url: '' };
  }
  return result.records[0].get('u').properties;
}

module.exports = {
  findAll,
  findById,
  findWinner,
  setWinner,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
