(function (myApp){
    'use strict';
    myApp.controller('ApartmentsController', function($state, $rootScope, $scope, $http) 
    {
        $scope.message = "Hola desde apartments";
        $http({
            method: 'GET',
            url: 'https://restcountries-v1.p.rapidapi.com/all',
            headers: {
                'Content-Type': undefined,
                'x-rapidapi-key': 'f6992e33acmsh54660545853001dp177c00jsne09a8e8d5ea9'
            }
        })
        .then(function successCallback(response) {
              $scope.result = response;
        }, function errorCallback(response) {
            $scope.result = response;
        });
    });
})(angular.module("myApp"));
