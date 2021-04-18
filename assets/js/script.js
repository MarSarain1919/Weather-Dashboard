var city = ''; // to store searched city
var inputEl = $('#city-input');
var searchEl = $('#searchBtn');
var history = $('#history');
var nameEl = $('#cityName');
var tempEl = $('#currentTemp');
var humidEl = $('#currentHumidity');
var windEl = $('#currentWindSpeed');
var uvEl = $('#currentUV');
var sCity=[];

var APIkey = "4e455d785df38534ce943125436a4b13";
// TODO create a function to get weather
function getForecast(event) {
    event.preventDefault();
    if(searchEl.val().trim() !==""){
        city=searchEl.val().trim();
        todayWeather(city);
    }
}

// Call to weather API had to look at examples to figure this out
function todayWeather(city) {
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;
    $.ajax({
        url: queryURL,
        method: "GET",
    })
    // add a function to bring forth data we want to call
    .then(function(response){
        console.log(response);

        // The date format method is taken from the  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        var date = new Date(response.dt*1000).toLocaleDateString();
        $(nameEl).html(response.name + "("+date+")");

        // add temp
        var tempF = (responsemain.temp - 273.15) * 1.8 + 32;
        $(tempEl).html(response.tempF + "("+tempF+"(");
    
    
    
    })
}