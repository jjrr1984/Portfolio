var app = angular.module('myPortfolio');
app.controller('bio',['$scope',function($scope){
	$scope.$parent.tab = 'aboutMe';
}]);