const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema2 = Schema({
  usuarioNombre: String,
  sesionIni: Date,
  sesionFin: Date,
  numEncuentros: Number,
  detalleEncuentro: [{
      nombrePokemon: String,
      atrapado: Boolean,
      fechaCaptura: Date,
      estadisticas: {
          vida: Number,
          ataque: Number,
          velocidad: Number,
          defensa: Number,
      }
    }],
    location: {
        type: String,
        coordinates: Array,
    }
     
},{ collection: 'sesiones' });

module.exports = mongoose.model('tasks', TaskSchema2);
