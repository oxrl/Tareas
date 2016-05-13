angular.module('appTareas')
    .controller('ctrlAlta', function($scope, $state, comun) {
    $scope.tarea = {}
    // $scope.tareas = [];
    comun.getAll();
    $scope.tareas = comun.tareas;

    $scope.prioridades = ['Baja', 'Normal', 'Alta'];

    $scope.agregar = function() {
        comun.add({
            nombre: $scope.tarea.nombre,
            prioridad: parseInt($scope.tarea.prioridad)
        });

        $scope.tarea.nombre = '';
        $scope.tarea.prioridad = '';
    }

    $scope.masPrioridad = function(tarea) {
        tarea.prioridad += 1;
    }

    $scope.menosPrioridad = function(tarea) {
        tarea.prioridad -= 1;
    }

    $scope.eliminar = function(tarea) {
        comun.delete(tarea);
    }

    $scope.procesaObjeto = function(tarea) {
        comun.tarea = tarea;
        $state.go('editar');
    }

})
    .controller('ctrlEditar', function($scope, $state, comun) {
        $scope.tarea=comun.tarea;

        $scope.actualizar = function() {
            comun.update($scope.tarea);
            $state.go('alta');
        }

        $scope.eliminar = function(){
            comun.delete($scope.tarea);
            $state.go('alta');
        }
    });