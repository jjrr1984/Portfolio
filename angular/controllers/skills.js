var app = angular.module('myPortfolio');
app.controller('skills',['$scope','$http',function($scope,$http){

	/*
		@description: it calls back-end to obtain the skills records and group them
			into 3 columns
	*/
	$scope.getSkills = function(){
		$scope.$parent.nLoads++;
		$http.get('/db/skills/' + $scope.language)
			.success(function(records) {
				$scope.$parent.nLoads--;
				var skills = [];
				var firstCol = [];
				var secondCol = [];
				var thirdCol = [];
				var aux;
				for(var i=0;i < records.length;i++){	//	Grouping in rows of 3 groups
					aux = (i+1)%3;
					switch(aux){
						case 1:
							firstCol.push(records[i]);
							break;
						case 2:
							secondCol.push(records[i]);
							break;
						case 0:
							thirdCol.push(records[i]);
							break;
					}
				}
				skills.push(firstCol);
				skills.push(secondCol);
				skills.push(thirdCol);
				$scope.skills = skills;
				$scope.$parent.tab = 'skills';
			})
			.error(function(error){
				$scope.$parent.nLoads--;
				alert("Skills could not be retrieved:" + error);
			});
	};

	/*
		@description: it returns the offset of the different columns
		@param index: the column index (starting at 0)
	*/
	$scope.getOffset = function(index){
		if(index === 0){
			return 2;
		}else{
			return 1;
		}
	};

	$scope.$on('reloadSkills', function() {  
        $scope.getSkills();        
    });

    $scope.getSkills();
}]);