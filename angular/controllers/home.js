var app = angular.module('myPortfolio');
app.controller('home',['$scope',function($scope){
	$scope.$parent.tab = 'home';
}]);