const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  usuario: String,
  detailSession: String,
  pokemons: String 
},{collection: 'pokemon'});

module.exports = mongoose.model('pokemon', TaskSchema);
