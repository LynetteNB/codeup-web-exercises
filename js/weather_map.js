(function () {
    $("document").ready(function() {
        var markers = [];
        var geoLat = 40.7128;
        var geoLon = -74.0060;
        $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?').done( function(data) {
            geoLat = Number(data.geoplugin_latitude);
            geoLon = Number(data.geoplugin_longitude);
            map.setCenter({lat: geoLat, lng: geoLon});
            clickMarker({lat: geoLat, lng: geoLon}, map);
        }).fail(function(){
            geoLat = 40.7128;
            geoLon = -74.0060;
        });
        var infoWindow = new google.maps.InfoWindow({content: ""});
        var map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: geoLat, lng: geoLon},
            zoom: 10
        });
        google.maps.event.addListener(map, 'click', function (event) {
            geoLat = event.latLng.lat();
            geoLon = event.latLng.lng();
            clickMarker(event.latLng, map);
        });
        $("#daysNumber").on("change", update);
        $(".checkboxes").on("click", update);
        function clickMarker(location, map) {
            clearMarkers();
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: 'IMG/weather-sun.png'
            });
            markers.push(marker);
            update();
            marker.addListener("mouseover", function(){
                infoWindow.open(map, marker);
            });
        }
        function clearMarkers() {
            setMapOnAll(null);
        }
        function setMapOnAll(map) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
        }
        function update() {
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: "7c66dda135d5bd2e458cb66254bd830b",
                lat: geoLat,
                lon: geoLon,
                units: "imperial"
            }).done(function (weather) {
                var html = "";
                var htmlheaders = "";
                var city = "";
                var tempMaxArray = [];
                var tempMinArray = [];
                var humidityArray = [];
                var windArray = [];
                var pressureArray = [];
                var dateArray = [];
                var counter = 0;
                weather.list.forEach(function(temp){
                    var date = new Date((temp.dt * 1000)-21600);
                    dateArray.push(date.getDay());
                    tempMaxArray.push(Math.round(temp.main.temp_max));
                    tempMinArray.push(Math.round(temp.main.temp_min));
                    humidityArray.push(temp.main.humidity);
                    windArray.push(temp.wind.speed);
                    pressureArray.push(temp.main.grnd_level);
                });
                for(var l = 0; l <dateArray.length; l++){
                    if(dateArray[0] === dateArray[l]){
                        counter++;
                    }
                }
                for (var i = 0; i <= (($("#daysNumber").val()-1)*8); i += 8) {
                    var weatherGif = "";
                    var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    var tempMin, tempMax, humidity, wind, pressure;
                    if(weather.list[i].weather[0].icon === "01d" ||weather.list[i].weather[0].icon === "01n") {
                        weatherGif = "https://media.giphy.com/media/kZLVxluTyw32U/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "02d" || weather.list[i].weather[0].icon === "02n") {
                        weatherGif = "https://media.giphy.com/media/3ov9jLYWb4zCjGfqIE/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "03d" || weather.list[i].weather[0].icon === "03n") {
                        weatherGif = "https://media.giphy.com/media/1iPwXyVKrKf0dNmM/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "04d" || weather.list[i].weather[0].icon === "04n") {
                        weatherGif = "https://media.giphy.com/media/3ohhwsupwJyzktdgS4/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "09d" || weather.list[i].weather[0].icon === "09n") {
                        weatherGif = "https://media.giphy.com/media/EEFEyXLO9E0YE/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "10d" || weather.list[i].weather[0].icon === "10n") {
                        weatherGif = "https://media.giphy.com/media/88wGX2Yfl6Z7q/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "11d" || weather.list[i].weather[0].icon === "11n") {
                        weatherGif = "https://media.giphy.com/media/3ohhwHGift6jATwg4o/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "13d" || weather.list[i].weather[0].icon === "13n") {
                        weatherGif = "https://media.giphy.com/media/3o6gDS7g6M4WpszMhq/giphy.gif";
                    } else if (weather.list[i].weather[0].icon === "50d" || weather.list[i].weather[0].icon === "50n") {
                        weatherGif = "https://media.giphy.com/media/xEjTM5COAKyNa/giphy.gif";
                    }
                    console.log(weather.list[i].weather[0].icon);
                    if (i === 0) {
                        htmlheaders += "<div class='header'>Current</div>";
                        html += "<div class='headerSmall header'>Current</div>";
                        tempMax = Math.max(...tempMaxArray.slice(i, counter));
                        tempMin = Math.min(...tempMinArray.slice(i, counter));
                        humidity = humidityArray.slice(i, counter).reduce((a,b) => a+b)/counter;
                        wind = windArray.slice(i, counter).reduce((a,b) => a+b)/counter;
                        pressure = pressureArray.slice(i, counter).reduce((a,b) => a+b)/counter;
                    } else {
                        htmlheaders += "<div class='header'>" + daysArray[dateArray[i]] + "</div>";
                        html += "<div class='headerSmall header'>" + daysArray[dateArray[i]] + "</div>";
                        tempMax = Math.max(...tempMaxArray.slice(i, i+8));
                        tempMin = Math.min(...tempMinArray.slice(i, i+8));
                        humidity = humidityArray.slice(i, i+8).reduce((a,b) => a+b)/8;
                        wind = windArray.slice(i, i+8).reduce((a,b) => a+b)/8;
                        pressure = pressureArray.slice(i, i+8).reduce((a,b) => a+b)/8;
                    }
                    html += "<div class='day'><h3>" + tempMax + "°/" + tempMin + "°F" + "</h3>";
                    if($("#iconShow").prop('checked')) {
                        html += "<img class='gifSize' src='" + weatherGif + "'>";
                    }
                    if($("#descriptionShow").prop('checked')) {
                        html += "<p>" + weather.list[i].weather[0].main + ": " + weather.list[i].weather[0].description + "</p>";
                    }
                    if($("#humidityShow").prop('checked')) {
                        html += "<p>Humidity: " + Math.round(humidity) + "%</p>";
                    }
                    if($("#windShow").prop('checked')) {
                        html += "<p>Wind: " + Math.round(wind) + " mph</p>";
                    }
                    if($("#pressureShow").prop('checked')) {
                        html += "<p>Pressure: " + Math.round(pressure) + " hPa</p>";
                    }
                    html += "</div></div>";
                    if(i === 0){
                        i = counter-8;
                    }
                }
                if (weather.city.name) {
                    city = weather.city.name;
                } else {
                    city = "Somewhere in the World";
                }infoWindow = new google.maps.InfoWindow({content: "<h3 class='header'>" + city + "</h3><div><h3>" +  Math.round(weather.list[0].main.temp) + "°F</h3><p>" + weather.list[0].weather[0].main + ": " + weather.list[0].weather[0].description + "</p><p>Humidity: " + Math.round(weather.list[0].main.humidity) + "%</p>"});
                $(".city").html(city);
                $(".headers").html(htmlheaders);
                $(".weather").html(html);
            }).fail(function () {
                $(".city").html("No such place!");
                $(".weather").html("<p>Please try a different location.</p>");
            });
        }
    });
})();