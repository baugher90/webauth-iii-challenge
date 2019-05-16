const db = require('../../database/dbConfig');

module.exports = {
  add,
  findDep,
  findRole,
  findAll,
  findBy,
  findById,
};

function findDep() {
  return db('users').select('id', 'username', 'department');
}

function findRole() {
  return db('users').select('id', 'username', 'role');
}

function findAll() {
  return db('users').select('id', 'username', 'department', 'role');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
