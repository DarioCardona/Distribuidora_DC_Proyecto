var app = angular.module('AngularScaffold', ['ui.router', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'loginController'
        })
				.state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller: 'adminController'
        })
				.state('usuario', {
            url: '/usuario',
            templateUrl: '/views/usuario.html',
            controller: 'usuarioController'
        })
				.state('abono', {
            url: '/abono',
            templateUrl: '/views/abono.html',
            controller: 'abonoController'
        });
}])
