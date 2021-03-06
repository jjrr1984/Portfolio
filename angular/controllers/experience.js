var app = angular.module('myPortfolio');
app.controller('experience',['$scope','$http',function($scope,$http){

	/*
		@description: it calls back-end to obtain the experience records
	*/
	$scope.getExperience = function(){
		$scope.$parent.nLoads++;
		$http.get('/db/experience/' + $scope.language)
			.success(function(records) {
				$scope.$parent.nLoads--;
				$scope.expRecords = records;
				$scope.$parent.tab = 'experience';
			})
			.error(function(error){
				$scope.$parent.nLoads--;
				alert("Experience could not be retrieved:" + error);
			});
	};

	$scope.$on('reloadExperience', function(){
		$scope.getExperience();
	});

	$scope.getExperience();

}]);