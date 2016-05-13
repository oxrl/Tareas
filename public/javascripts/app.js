angular.module('appTareas', ['ui.router'])/*Cambio de prueba */
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('alta', {
                url: '/alta',
                templateUrl: 'views/alta.html',
                controller: 'ctrlAlta'
            })
            .state('editar', {
                url: '/editar',
                templateUrl: 'views/editar.html',
                controller: 'ctrlEditar'
            });

        $urlRouterProvider.otherwise('alta');
    })
    