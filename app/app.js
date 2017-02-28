var myGuideApp = angular.module('myGuideApp', ['ngAnimate']);

myGuideApp.controller('PlaceController', ['$scope', '$http', function( $scope, $http){

 $scope.removePlace = function(place){
   var removedPlace = $scope.places.indexOf(place);
    $scope.places.splice(removedPlace, 1);
  }

$scope.addPlace = function(){

    $scope.places.push({
      name: $scope.newplace.name,
      city: $scope.newplace.city,
      available: true,
      img: $scope.newplace.img,

    });

    $scope.newplace.name="";
    $scope.newplace.city="";
    $scope.newplace.img="";
    };


$http.get('data/places.json').then(function(response){
    event.preventDefault()
  $scope.places = response.data;

});

  /*console.log(angular.toJson($scope.places));*/


}]);
