// build your `Project` model here
const db = require('../../data/dbConfig.js')

async function getProject()  {
  const data = await db('projects')
  const formattedData = data.map((row) => {
    row.project_completed = Boolean(row.project_completed)
    return row})
  return formattedData
}

async function postProject(project) {
  const [project_id] = await db('projects').insert(project)
  const projects = await getProject()
  const newProject = projects.filter((proj) => proj.project_id === project_id)[0]
  return newProject
}

module.exports = {
  getProject,
  postProject
}