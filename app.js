(function () {  
    'use strict';  
  
    var myApp = angular.module("myApp", ['ui.router']); 

    myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {  
        $locationProvider.hashPrefix('');  
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('default', {  
            url: '/',              
            template: '<br>Index Main',  
            controller: 'HomeCtrl'  
        });
        $stateProvider.state('apartments', {  
            url: '/apartments',              
            templateUrl: 'templates/apartments/apartments.tpl.html',  
            controller: 'ApartmentsController'  
        });
        
    }]);

    myApp.controller('HomeCtrl', function ($scope) {});
})();