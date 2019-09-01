//save the state of the control panel in local storage of phone
function saveState() {
  //check state of various analog, digital, geo inputs and outputs
  localStorage.saveState_analog_enabled_A3 = analog_enabled_A3;
  localStorage.saveState_analog_enabled_A4 = analog_enabled_A4;
  localStorage.saveState_analog_enabled_A5 = analog_enabled_A5;
  localStorage.saveState_geolocation_enabled = geolocation_enabled;
  localStorage.saveState_digital_enabled_D9 = digital_enabled_D9;
  localStorage.saveState_digital_enabled_D10 = digital_enabled_D10;

};

//use the last saved state of the control panel
function useState() {

  //verify last state of A3 controls, put it back to last saved state
  if (localStorage.saveState_analog_enabled_A3 == "true") { // if save state is true but the current setting is false
    if (analog_enabled_A3 == false) {
      app.toggelAnalogA3(); // turn it to true
    }
  } else {
    if (analog_enabled_A3 == true) { // if save state is false but current setting is true
      app.toggelAnalogA3(); // turn it back to false
    }
  };

  //verify last state of A4 controls, put it back to last saved state
  if (localStorage.saveState_analog_enabled_A4 == "true") { // if save state is true but the current setting is false
    if (analog_enabled_A4 == false) {
      app.toggelAnalogA4(); // turn it to true
    }
  } else {
    if (analog_enabled_A4 == true) { // if save state is false but current setting is true
      app.toggelAnalogA4(); // turn it back to false
    }
  };

  //verify last state of A5 controls, put it back to last saved state
  if (localStorage.saveState_analog_enabled_A5 == "true") { // if save state is true but the current setting is false
    if (analog_enabled_A5 == false) { // turn it to true
      app.toggelAnalogA5();
    }
  } else {
    if (analog_enabled_A5 == true) { // if save state is false but current setting is true
      app.toggelAnalogA5(); // turn it back to false
    }
  };


  //verify last state of Geo controls, put it back to last saved state
  if (localStorage.saveState_geolocation_enabled == "true") { // if save state is true but the current setting is false
    if (geolocation_enabled == false) { // turn it to true
      app.toggleGeoTrack();
    }
  } else {
    if (geolocation_enabled == true) { // if save state is false but current setting is true
      app.toggleGeoTrack(); // turn it back to false
    }
  };


  if (localStorage.saveState_digital_enabled_D9 == "true") { // if save state is true but the current setting is false
    if (digital_enabled_D9 == false) {
      app.toggleDigitalD9(); // turn it to true
    }
  } else {
    if (digital_enabled_D9 == true) { // if save state is false but current setting is true
      app.toggleDigitalD9(); // turn it back to false
    }
  };


  if (localStorage.saveState_digital_enabled_D10 == "true") { // if save state is true but the current setting is false
    if (digital_enabled_D10 == false) {
      app.toggleDigitalD10(); // turn it to true
    }
  } else {
    if (digital_enabled_D10 == true) { // if save state is false but current setting is true
      app.toggleDigitalD10(); // turn it back to false
    }
  };

};

