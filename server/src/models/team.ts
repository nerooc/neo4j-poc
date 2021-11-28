//@ts-nocheck

var { nanoid } = require('nanoid');
var neo4j = require('neo4j-driver');
require('dotenv').config();
var { url, db_username, db_password, database } = process.env;

const db_con = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = db_con.session({ database });

const findAll = async () => {
  const result = await session.run(`Match (t:Team) return t`);
  return result.records.map((i) => i.get('t').properties);
};

const findById = async (id) => {
  const result = await session.run(
    `MATCH (t:Team {_id : '${id}'} ) return t limit 1`
  );
  console.log(result.records[0].get('t').properties);
  return result.records[0].get('t').properties;
};

const create = async (team) => {
  const unique_id = nanoid(8);
  await session.run(
    `CREATE (t:Team {_id : '${unique_id}', name: '${team.name}', image_url: '${team.image_url}'} ) return t`
  );
  return await findById(unique_id);
};

const findByIdAndUpdate = async (id, team) => {
  const result = await session.run(
    `MATCH (t:Team {_id : '${id}'}) SET t.name= '${team.name}', t.image_url= '${team.image_url}' return t`
  );
  return result.records[0].get('t').properties;
};

const findByIdAndDelete = async (id) => {
  await session.run(`MATCH (t:Team {_id : '${id}'}) DELETE t`);
  return await findAll();
};

module.exports = {
  findAll,
  findById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
