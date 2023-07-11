const db = require('knex');

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id)
}

const create = () => {
  // DO YOUR MAGIC
}
