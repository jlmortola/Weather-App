//only works on http

$(document).ready(function(){
// we get the latitud and longitud from ip-api.com
$.ajax({
	url:"http://ip-api.com/json",
  type:"GET",
  success: function(data){
    var lat = data.lat;
    var lon = data.lon;
    var units = "imperial"; //this vas will help us change between units

    $.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?lat="+lat+ "&lon="+lon+"&units="+units+"&APPID=5aaea9d5abf322d7da2ae0b00f58c945",
    type: "GET",
    success: function(data){
    $(".city").html(data.name);
    $(".temp").html(Math.ceil(data.main.temp)+"ºF");
    var string = (data.weather[0].id).toString();
    var icon = string.split('');


    // we make a switch stament to display the img depending of the weather
    switch (icon[0]) {
    case "2":
    $(".img").attr("src","http://image.flaticon.com/icons/svg/178/178343.svg");
    break
    case "3":
    $(".img").attr("src","http://image.flaticon.com/icons/svg/146/146525.svg");
    break
    case "5":
    $(".img").attr("src","http://image.flaticon.com/icons/svg/146/146527.svg");
    break
    case "6":
    $(".img").attr("src","http://image.flaticon.com/icons/svg/146/146520.svg");
    break
    case "7":
    $(".img").attr("src","http://image.flaticon.com/icons/svg/187/187232.svg");
    break
    case "8":
    if (icon[1]===0){
    $(".img").attr("src","http://image.flaticon.com/icons/svg/169/169367.svg");
    }
    else {
    $(".img").attr("src","http://image.flaticon.com/icons/svg/146/146518.svg");
    }
    break
    case "9":
    if (icon[1]===0){
    $(".img").attr("src","http://image.flaticon.com/icons/svg/189/189158.svg");
    }
    else
    {
    $(".img").attr("src","http://image.flaticon.com/icons/svg/191/191053.svg");
    }
    break
    };






      $(".unit").on("click", temper);


   //function to change btw C anf F
    function temper(){
    if(units === "metric"){
      units = "imperial";
      //insted of transforming C to F, we tell jquery to load again the URL
      $.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?lat="+lat+ "&lon="+lon+"&units="+units+"&APPID=5aaea9d5abf322d7da2ae0b00f58c945",
    type: "GET",
    success: function(data){
    $(".temp").html(Math.ceil(data.main.temp)+"ºF");
    $("button").html("To Celcius");
    }
    })
    }

    else {
    units = "metric";
    $.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?lat="+lat+ "&lon="+lon+"&units="+units+"&APPID=5aaea9d5abf322d7da2ae0b00f58c945",
    type: "GET",
    success: function(data){
    $(".temp").html(Math.ceil(data.main.temp)+"ºC");
    $("button").html("To Farenheit");
    }
    })
    }
    };
    },


  })
  }

})
  })
