angular.module('starter.services', [])
	.factory('Sessions', ['$http', function($http){
		var sesh = {};

		sesh.get = function(type) {
			var params = {};
			if (type) {
				params = {
					type: type;
				}
			}
			return $http({}).success(function(){}).error(function(){});
		}

		return sesh;
	}])