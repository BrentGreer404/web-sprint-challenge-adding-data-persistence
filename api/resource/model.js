// build your `Resource` model here
const db = require('../../data/dbConfig.js')

function getResource()  {
  return db('resources')
}

async function postResource(resource) {
  const [resource_id] = await db('resources').insert(resource);
  return getResource().where({ resource_id }).first();
}

module.exports = {
  getResource,
  postResource
}