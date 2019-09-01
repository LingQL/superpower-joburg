//enable/disable D9 digital pin on and off
app.toggleDigitalD9 = function()
{
  if (digital_enabled_D9)
  {
    digital_enabled_D9 = false;
    localStorage.digital_enabled_D9 = digital_enabled_D9;
    app.sendData([0x01,0x00,0x02]); //turn it off
  }
  else 
  {
    digital_enabled_D9 = true;
    localStorage.digital_enabled_D9 = digital_enabled_D9;
    app.sendData([0x01,0x00,0x01]); // turn it on
  }
};

//enable/disable D10 digital pin on and off
app.toggleDigitalD10 = function() {
  if (digital_enabled_D10) {
    digital_enabled_D10 = false;
    localStorage.digital_enabled_D10 = digital_enabled_D10;
    app.sendData([0x01, 0x00, 0x04]); //turn it off
  } else {
    digital_enabled_D10 = true;
    localStorage.digital_enabled_D10 = digital_enabled_D10;
    app.sendData([0x01, 0x00, 0x03]); // turn it on
  }
};

