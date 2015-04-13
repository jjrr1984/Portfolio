var app = angular.module('myPortfolio');
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
        templateUrl: '/views/home.html',
        controller: 'home'
      }).
      when('/bio', {
        templateUrl: '/views/bio.html',
        controller: 'bio'
      }).
      when('/experience', {
        templateUrl: '/views/experience.html',
        controller: 'experience'
      }).
      when('/skills', {
        templateUrl: '/views/skills.html',
        controller: 'skills'
      }).
      when('/about', {
        templateUrl: '/views/about.html',
        controller: 'about'
      });
}]);