var app = angular.module('myPortfolio');
app.controller('about',['$scope',function($scope){
	$scope.$parent.tab = 'about';
}]);