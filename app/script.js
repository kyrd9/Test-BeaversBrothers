$(document).ready(function(){
   $(".city-menu span").on("click", function(){
       $(".cities").toggleClass("show");
   });
});

$(document).ready(function(){
   $(".addPlace button").on("click", function(){
      $(".addPlaces-form").toggleClass("active");
      $(".addPlace h1").toggleClass("active");
      $(".addPlace img").toggleClass("active");
   });
});

$(document).ready(function(){
   $(".addPlace-button").on("click", function(){
       $(".addPlaces-form").toggleClass("active");
       $(".addPlace h1").toggleClass("active");
       $(".addPlace img").toggleClass("active");
       $(".addPlaces").addClass("active");
   });
});
