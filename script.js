angular.module('MyApp', [])
    .controller('MyController', function($http, $sce) {
        var vm = this;
      
        
        vm.results = [];
        vm.keyword = null;

        vm.searchFlickr = function(keyword) {            
        	vm.results = [];

            var params = {
                method: 'flickr.photos.search',
                api_key: "81f80ddd0cfdd9ed5164c94868fa2230",
                text: keyword,
                format: 'json',
                nojsoncallback: 1
            };

            $http({
            	method: 'GET',
            	url: 'https://api.flickr.com/services/rest',
				params: params            	
            }).then(function(response){
            	console.log('there');
            	// vm.results = response.data.photos.photo;            	
            	console.log('there');
            	for (var i = 0; i < response.data.photos.photo.length; i++){
            		var photo = response.data.photos.photo[i]
            		console.log('photo', photo);
            		var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
            		// console.log(url);
            		vm.results.push(url);
            	}
            	console.log(response)

            }, function(response){
            	alert('error');
            	console.log(response);
            })


        }
    })
