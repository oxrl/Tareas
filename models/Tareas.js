/**
 * Created by oxrl on 5/11/16.
 */
var mongoose = require('mongoose');

var TareasSchema = new mongoose.Schema({
   nombre:String,
    prioridad:Number
});

mongoose.model('Tareas',TareasSchema);