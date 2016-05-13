angular.module('appTareas')
    .factory('comun', function($http) {
    var comun = {}

    comun.tareas = [];
    comun.tarea={};
    comun.eliminar = function(tarea) {
        var indice = comun.tareas.indexOf(tarea);
        comun.tareas.splice(indice, 1);
    }
    /***Sección de métodos remotos***/
    comun.getAll = function(){
        return $http.get('/tareas')
            .success(function(data){
                angular.copy(data, comun.tareas);
                return comun.tareas;
            })
    }
    comun.add = function(tarea){
        return $http.post('/tarea', tarea)
            .success(function(tarea){
                comun.tareas.push(tarea);
            })
    }
    comun.update = function(tarea){
        return $http.put('/tarea/' + tarea._id, tarea)
            .success(function(data){
                var indice = comun.tareas.indexOf(tarea);
                comun.tareas[indice] = data;
            })
    }
    comun.delete = function(tarea){
        return $http.delete('/tarea/' + tarea._id)
            .success(function(){
                var indice = comun.tareas.indexOf(tarea);
                comun.tareas.splice(indice, 1);
            })
    }

    return comun;
});

