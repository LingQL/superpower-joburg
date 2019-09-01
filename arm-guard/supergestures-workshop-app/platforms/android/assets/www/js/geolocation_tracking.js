var watchGeo;

function geolocationTracking() {

  if (navigator.geolocation) {

    if (geolocation_enabled == true) {
      watchGeo = navigator.geolocation.watchPosition(geolocationSuccess, geolocationFailure, {
        enableHighAccurracy: true
      });
    } else if (geolocation_enabled == false) {
      navigator.geolocation.clearWatch(watchGeo);
    }

  } else {
    alert("Geolocation is not supported by this browser.");
  }

  function geolocationSuccess(position) {

    document.getElementById("geolocationValue").innerHTML = "<b>Latitude= " + position.coords.latitude + ", Longitude= " + position.coords.longitude + "</b>";
    myLocationLat = position.coords.latitude;
    myLocationLong = position.coords.longitude;
    
    if (connect_to_Geo == true) {
      sendUpdateGeolocation();
    }

  };

  function geolocationFailure(error) {
    alert("geolocation failure");
  };

};

function sendUpdateGeolocation() {

  var geoUrl = "https://api.thingspeak.com/channels/" + channelId;

  $.ajax({
      method: "PUT",
      url: geoUrl,
      data: {
        api_key: userApi,
        latitude: myLocationLat,
        longitude: myLocationLong
      }
    })
    .done(function(data, status) {
      geoCount++;
      document.getElementById("geoStatus").innerHTML = "Number of readings sent to Thingspeak:" + geoCount;
    });
};

app.toggleGeoTrack = function() {
  if (geolocation_enabled) {
    geolocation_enabled = false;
    localStorage.geolocation_enabled = geolocation_enabled;
    geolocationTracking();

  } else {
    geolocation_enabled = true;
    localStorage.geolocation_enabled = geolocation_enabled;
    $('#geolocationValue').show();
    geolocationTracking();
  }

};


