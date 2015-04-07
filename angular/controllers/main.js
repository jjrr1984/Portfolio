var app = angular.module('myPortfolio');
app.controller('main',function($http,$scope){

	/*
		@description: it says if the cookies message has to be shown or not
	*/
	$scope.cookieMsgVisible = function(){
		if (typeof(Storage) !== "undefined") {
		    if(localStorage.getItem("cookieMsg") !== null){
		    	return false;
		    }
		} else {
		    if($scope.getCookie('cookieMsg') !== null){
		    	return false;
		    }else{
		    	return true;
		    }
		}
		return true;
	};

	/*
		@description: it adds a new cookie/update an existing one (old browsers)
		@param cookieName: the cookie name
		@param cookieValue: the cookie value
	*/
	$scope.addCookie = function(cookieName,cookieValue){
		document.cookie = cookieName + "=" + cookieValue;
	};

	/*
		@description: it returns the value of a cookie (old browsers)
		@param cookieName: the cookie name
	*/
	$scope.getCookie = function(cookieName){
		var cookies = document.cookie.split(';');
	    for(var i=0;i < cookies.length;i++){
	    	var aux = cookies[i].trim().split('=');
	    	if(aux[0] === cookieName){
	    		return aux[1];
	    	}
	    }
	    return null;
	};

	/*
		@description: it stores the cookie for the cookies message to avoid showing it again
	*/
	$scope.removeCookieMsg = function(){
		if (typeof(Storage) !== "undefined") {
		    localStorage.setItem("cookieMsg", "hide");
		} else {
		    $scope.addCookie('cookieMsg','hide');
		}
	};

	/*
		@description: it returns the language with which the site has to be shown
	*/
	$scope.getLanguage = function(){
		var storedLanguage = $scope.getStoredLang();
		if(storedLanguage === null){
			var browserLang = (navigator.language || navigator.userLanguage).split("-")[0];
	 		if(browserLang === 'es'){
	 			return 'spa';
	 		}else{
	 			return 'eng';
	 		}
	 	}else{
	 		return storedLanguage;
	 	}
	};

	/*
		@description: it calls back-end to get the translations in the preferred language
	*/
	$scope.getLabels = function(){
		$scope.nLoads++;
		$http.get('/db/labels/' + $scope.language)
			.success(function(labelsArray) {
				$scope.nLoads--;
				var labelsHash = Object;
				for(var i=0;i < labelsArray.length;i++){
					labelsHash[labelsArray[i].tag] = labelsArray[i].text;
				}
				$scope.labels = labelsHash;
			})
			.error(function(error){
				$scope.nLoads--;
				alert("Translations could not be retrieved:" + error);
			});
	};

	/*
		@description: it says if a language is the current one in the site
		@param lang: the language to check
	*/
	$scope.isLangSelected = function(lang){
		return lang === $scope.language;
	};

	/*
		@description: it stores the language cookie
	*/
	$scope.storeLanguage = function(){
		if (typeof(Storage) !== "undefined") {
		    localStorage.setItem("lang", $scope.language);
		} else {
		    $scope.addCookie('lang',$scope.language);
		}
	};

	/*
		@description: it gets the language stored as cookie
	*/
	$scope.getStoredLang = function(){
		if (typeof(Storage) !== "undefined") {
		    return localStorage.getItem("lang");
		} else {
		    return $scope.getCookie("lang");
		}
	};

	/*
		@description: it changes the language of the site
		@param lang: the new language
	*/
	$scope.setLang = function(lang){
		$scope.language = lang;
		$scope.storeLanguage();
		$scope.getLabels();
		if($scope.isSelected('experience')){
			$scope.$broadcast('reloadExperience');
		}else if($scope.isSelected('skills')){
			$scope.$broadcast('reloadSkills');
		}
	};

	/*
		@description: it says if a tab is the one that is currently selected
		@param tab: the tab to check
	*/
	$scope.isSelected = function(tab){
		if($scope.tab === tab){
			return true;
		}else{
			return false;
		}
	};

	/*
		@description: it says if the site is still waiting for some back-end response
	*/
	$scope.isLoading = function(){
		return $scope.nLoads > 0 ? true : false;
	};

	//	Jquery trick to hide the links when clicking anywhere (mobile)
	$(document).on('click',function(){
		$('.navbar-collapse.in').collapse('hide');
	});
	
	$scope.nLoads = 0;	//	It indicates the number of calls to the backend that are in progress
	$scope.language = $scope.getLanguage();
	$scope.getLabels();
});