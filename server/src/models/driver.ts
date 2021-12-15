//@ts-nocheck
var { nanoid } = require('nanoid');
var neo4j = require('neo4j-driver');
require('dotenv').config();
var { url, db_username, db_password, database } = process.env;

const db_con = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = db_con.session({ database });

const findAll = async () => {
  const result = await session.run(`Match (d:Driver) return d`);
  return result.records.map((i) => i.get('d').properties);
};

const findById = async (id) => {
  const result = await session.run(
    `MATCH (d:Driver {_id : '${id}'} ) return d limit 1`
  );
  console.log(result.records[0].get('d').properties);
  return result.records[0].get('d').properties;
};

const create = async (driver) => {
  const unique_id = nanoid(8);
  await session.run(
    `CREATE (d:Driver {_id : '${unique_id}', name: '${driver.name}', surname: '${driver.surname}', image_url: '${driver.image_url}'} ) return d`
  );
  return await findById(unique_id);
};

const findByIdAndUpdate = async (id, driver) => {
  const result = await session.run(
    `MATCH (d:Driver {_id : '${id}'}) SET d.name= '${driver.name}', d.surname= '${driver.surname}', d.image_url= '${driver.image_url}' return d`
  );
  return result.records[0].get('d').properties;
};

const findByIdAndDelete = async (id) => {
  await session.run(`MATCH (d:Driver {_id : '${id}'}) DETACH DELETE d`);
  return await findAll();
};

module.exports = {
  findAll,
  findById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
