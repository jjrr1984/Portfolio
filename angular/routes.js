var app = angular.module('myPortfolio');
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
        templateUrl: '/views/home.min.html',
        controller: 'home'
      }).
      when('/bio', {
        templateUrl: '/views/bio.min.html',
        controller: 'bio'
      }).
      when('/experience', {
        templateUrl: '/views/experience.min.html',
        controller: 'experience'
      }).
      when('/skills', {
        templateUrl: '/views/skills.min.html',
        controller: 'skills'
      }).
      when('/about', {
        templateUrl: '/views/about.min.html',
        controller: 'about'
      });
}]);