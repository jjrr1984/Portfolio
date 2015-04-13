var app = angular.module('myPortfolio');
app.controller('footer',['$scope',function($scope){
	$('[data-toggle="popover"]').popover();
}]);