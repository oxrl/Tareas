angular.module('appTareas')

    .controller('ctrlAlta', function($scope, $state, comun) {
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.pages = [];
        $scope.users = [];
        $scope.actuales = [];
        $scope.actual = {};

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
        /***inicio recorset  *****/
        $scope.consultarTodos = function()
        {
                $scope.users = comun.tareas;

                $scope.pages.length = 0;
                var ini = $scope.currentPage - 1;
                var fin = $scope.currentPage + 1;
                if(ini < 1)
                {
                    ini = 1;
                    if(Math.ceil($scope.users.length / $scope.pageSize) > 5)
                    {
                        fin = 5;
                    }
                    else
                    {
                        fin = Math.ceil($scope.users.length / $scope.pageSize);
                    }
                }
                else
                {
                    if (ini >= Math.ceil($scope.users.length / $scope.pageSize) - 5)
                    {
                        ini =  Math.ceil($scope.users.length / $scope.pageSize) - 5;
                        fin =  Math.ceil($scope.users.length / $scope.pageSize);
                    }
                }

                if (ini < 1)
                {
                    ini = 1;
                }

                for (var i = ini; i <= fin; i++)
                {
                    $scope.pages.push({
                        no: i
                    });
                }

                if ($scope.currentPage >= $scope.pages.length)
                {
                    $scope.currentPage = $scope.pages.length - 1;
                }

                $scope.currentPage = 0;

        }
        $scope.setPage = function(index)
        {
            $scope.currentPage = index - 1;
        }
}).controller('ctrlEditar', function($scope, $state, comun) {
        $scope.tarea=comun.tarea;

        $scope.actualizar = function() {
            comun.update($scope.tarea);
            $state.go('alta');
        }

        $scope.eliminar = function(){
            comun.delete($scope.tarea);
            $state.go('alta');
        }
    }).filter('startFromGrid', function()
{
    return function(input, start)
    {
        start =+ start;
        return input.slice(start)
    }
});