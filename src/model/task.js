const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  usuario: String,
  detailSession: String,
  pokemons: String 
});

module.exports = mongoose.model('pokemons', TaskSchema);
