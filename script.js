

// criação do module de nome curriculumApp

var curriculumApp = angular.module('curriculumApp', ['ngRoute']);

// configuração dos caminhos

curriculumApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'templats/home.html',
		controller: 'homeController'
	})

		// caminho para a página - Quem sou


		.when('/quemSou', {
			templateUrl: 'templats/quemSou.html',
			controller: 'quemSouController'
		})

		// caminho para a página - O que faço

		.when('/queFaco', {
			templateUrl: 'templats/queFaco.html',
			controller: 'queFacoController'
		})

		// caminho para a página - Hobbies

		.when('/hobbies', {
			templateUrl: 'templats/hobbies.html',
			controller: 'hobbiesController'
		})
			// caminho para a página - contactos

		.when('/contatos', {
			templateUrl: 'templats/contatos.html',
			controller: 'contatosController'
		});
});

// create the controller and inject Angular's $scope

curriculumApp.controller('quemSouController', function ($scope) {

	// mensagem a ser apresentada na página

	$scope.message = '';
});

curriculumApp.controller('queFacoController', function ($scope) {
	$scope.message = '';
});

curriculumApp.controller('hobbiesController', function ($scope) {
	$scope.message = 'Tenho como hobbies fazer desporto (atletismo; natação; ciclismo), electrónica, robótica';
});

curriculumApp.controller('contatosController', function ($scope) {
	$scope.message = '1801256@estudante.uab.pt';
});

curriculumApp.controller('homeController', function ($scope) {
	$scope.message = '';
});