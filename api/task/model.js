// build your `Task` model here
const db = require('../../data/dbConfig.js')

async function getTask()  {
  const data = await db('tasks as t')
  .join('projects as p', 't.project_id', 'p.project_id')
  const formattedData = data.map((row) => {
    row.task_completed = Boolean(row.task_completed)
    return row})
  return formattedData
}

async function postTask(task) {
  const [task_id] = await db('tasks').insert(task)
  const tasks = await getTask()
  const newTask = tasks.filter((proj) => proj.task_id === task_id)[0]
  return newTask
}

module.exports = {
  getTask,
  postTask
}