var app = angular.module('myPortfolio');
app.controller('bio',function($scope){
	$scope.$parent.tab = 'aboutMe';
});