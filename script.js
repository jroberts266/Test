$(document).ready(function() {
    // API URLs and keys
    var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=cityname&appid=YOUR_API_KEY&units=imperial';
    var usgsAPI = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03294000&parameterCd=00065,00010&siteStatus=all';
    var usgsSite = '03294000';
    var weatherAPIKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  
    // Replace 'cityname', 'YOUR_API_KEY', and 'SITE_NUMBER' with your own values
  
    // Fetch water level data from USGS API
    $.getJSON(usgsAPI.replace('sitenum', usgsSite), function(data) {
      var waterLevel = data.value.timeSeries[0].values[0].value[0].value;
      var waterTemp = data.value.timeSeries[1].values[0].value[0].value;
  
      $('#water-level').text(waterLevel + ' ft');
      $('#water-temp').text(waterTemp + ' &deg;F');
    });
  
    // Fetch weather data from OpenWeather API
    $.getJSON(weatherAPI.replace('Sellersburg', 'CITY_NAME').replace('YOUR_API_KEY', weatherAPIKey), function(data) {
      var temp = data.main.temp;
      var conditions = data.weather[0].description;
      var wind = data.wind.speed + ' mph ' + data.wind.deg + '&deg;';
  
      $('#temp').text(temp + ' &deg;F');
      $('#conditions').text(conditions);
      $('#wind').html(wind);
    });
  });