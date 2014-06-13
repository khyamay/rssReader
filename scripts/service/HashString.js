angular.module('RssFeed')
	.service('HashString', function(){
		this.perform = function(str){
			var hash = 0;
			if (str.length == 0) {
				return hash;
			}

			for (var i = str.length - 1; i >= 0; i--){
				char = str.charCodeAt(i);
				hash = ((hash<<5)- hash)+ char;
				hash = hash & hash;
			}

			return hash;
		};
	});