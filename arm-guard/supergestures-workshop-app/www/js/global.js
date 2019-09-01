//check whether user has restart the app by accident
var restartApp = false;

//check whether user has press the begin button to start app
var startAppCheck = false;

//store token into global variables
var token_info;

//store user's input fields
var userApi;
var thingspeakApi;
var channelId;
var analogSensor1;
var analogSensor2;
var userEmail;
var userLockPassword;

//check whether each portal are connected to thingspeak
var userAPIcheck = false;
var thingspeakAPIcheck = false;
var channelIDcheck = false;
var analogSensor1check = false;
var analogSensor2check = false;

//store user's connected device
var connectedDevice;
var connectedThingspeak;
var localStoreDevice; // a var that take out the locally stored device information 

//store the connected device info
var storedDeviceInfo = {};

//check whether screen is locked
var lockScreenStatus = false;

//tracker to check bluetooth connection btw phone and app
var dataReceivedTracker = 0;
var countTracker = 0;

//store info on analog input
var analog_enabled_A3 = false; // initially not connected
var analog_enabled_A4 = false; // initially not connected
var analog_enabled_A5 = false; // initially not connected
var connect_to_A4 = false; // tracker to check whether A4 sending data to thingspeak
var connect_to_A5 = false; // tracker to check whether A5 sending data to thingspeak
var A4reading; // store A4 pin reading
var A5reading; // store A5 pin reading
var A4count = 0; // counting number of times A4 is sending data to thingspeak
var A5count = 0; // counting number of times A5 is sending data to thingspeak

//store info on digital input
var digital_enabled_D9 = false;
var digital_enabled_D10 = false;
var connect_to_D9 = false;
var connect_to_D10 = false;
var show_panel_D9 = false;
var show_panel_D10 = false;
var logic_constructed_D9 = false;
var logic_constructed_D10 = false;

//store info on geolocation tracking
var geolocation_enabled = false;
var connect_to_Geo = false;
var myLocationLat;
var myLocationLong;
var geoCount = 0;

//check network, gps, bluetooth status
var networkCheck = false;
var gpsCheck = false;
var bluetoothCheck = false;

//check whether app control panel is open or not
var openControlPanel = false;

//check whether app global connectivity panel is open or not
var openGlobalConnectivityControlPanel = false;

//check whether app quit by accident previously when in End User Mode (lockScreenStatus =true)
var userQuitApp = false;
var userQuitAppReconnect = false;

//cross connectivity panel global variables
var get_data_feed_1 = false; // toggle check for opening data feed retrieve panel
var get_data_1_success = false; // check whether data feed is successfully retrieved from thingspeak
var show_panel_data_feed_1 = false; // toggle check for opening logic connection panel for data feed
var logic_constructed_data_feed_1 = false; // check whether logic is constructed successfully for data feed 1
var connect_key_info_1;
var ReadApi_1;
var channelID_1;
var channelField_1;
var data_feed_1_reading;

//global connectivity panel global variables
var get_thingful = false; // toggle check for opening get thingful thing panel
var get_thingful_success = false; // check whether data feed is successfully retrieved from thingspeak
var show_panel_thingful = false; // toggle check for opening logic connection panel for thingful
var logic_constructed_thingful_data_feed = false; // check whether logic is constructed successfully for thingful feed
var global_connect_key_info;
var Thing_ID;
var Thing_data_set;
var thingful_reading;

//upload data to google form
var upload_to_online = false;
var update_spreadsheet = false;
var tick_tock_spreadsheet;


//track user's connected device information
function showStoredConnectedDevice() {
  if (app.connected) {
    document.getElementById("storedConnectedDevice").innerHTML = "Connected to: " + connectedDevice;
  } else {
    document.getElementById("storedConnectedDevice").innerHTML = "Not Connected to any Device";
  }

};

//check device status during designer mode 
function checkVisualStatus() {

}


//check device status during end user mode 
//check the phone's seting to make sure that the phone's bluetooth, wifi, gps are constantly on and stable
var checkDevice;

function checkingDeviceSetting() {
  checkDevice = setInterval(checkDeviceSetting, 2000); //check whether phone's setting is good every 2 seconds
};

function checkDeviceSetting() {

  //check whether bluetooth on phone is enabled 
  cordova.plugins.diagnostic.isBluetoothEnabled(function(enabled) {
    var b = enabled ? "enabled" : "disabled";

    if (b == "enabled") {

      $('#bluetooth_setting').css("color", "green");
      $('#bluetooth_setting').html("<b>Enabled</b>");

      $("#device_check_bluetooth").hide();

      bluetoothCheck = true;

    } else {

      $('#bluetooth_setting').css("color", "red");
      $('#bluetooth_setting').html("<b>Disabled *check phone setting*</b>");

      if (startAppCheck == true) {
        $("#device_check_bluetooth").show();
        $('#device_check_bluetooth').text('Bluetooth disabled *check phone setting*');
      } else {
        $("#device_check_bluetooth").hide();
      }
    }

  }, function(error) {
    console.error("The following error occurred: " + error);
  });

  //check whether network connection on phone is enabled 
  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    var n = states[networkState];
    if ((n == "WiFi connection") || (n == "Cell 3G connection") || (n == "Cell 4G connection")) {

      $('#network_setting').css("color", "green");
      $('#network_setting').html("<b>Good strength</b>");

      $("#device_check_network").hide();
      $('#user_device_check_network').hide();

      networkCheck = true;

    } else if (n == "No network connection") {

      if (startAppCheck == true) {
        $("#device_check_network").show();
        $('#device_check_network').text('No network found *check phone setting*');
        $('#user_device_check_network').show();
        $('#user_device_check_network').html('<b>No network found *check phone setting*</b>');


      } else {
        $("#device_check_network").hide();
        $('#user_device_check_network').hide();

      }

      $('#network_setting').css("color", "red");
      $('#network_setting').html("<b>" + n + "</b>");

    } else {

      if (startAppCheck == true) {
        $("#device_check_network").show();
        $('#device_check_network').text('Weak network connection *check phone setting* ');
        $('#user_device_check_network').show();
        $('#user_device_check_network').html('<b>Weak network connection *check phone setting* </b>');

      } else {
        $("#device_check_network").hide();
        $('#user_device_check_network').hide();

      }

      $('#network_setting').css("color", "red");
      $('#network_setting').html("<b>" + n + ": weak</b>");

    }
  };

  checkConnection(); // check network connection 

  //check whether GPS on phone is enabled 
  cordova.plugins.diagnostic.isLocationEnabled(function(enabled) {
    var g = enabled ? "enabled" : "disabled";
    if (g == "enabled") {

      $('#gps_setting').css("color", "green");
      $('#gps_setting').html("<b>Enabled</b>");

      $("#device_check_gps").hide();
      $("#user_device_check_gps").hide();

      gpsCheck = true;

    } else {

      if (startAppCheck == true) {
        $("#device_check_gps").show();
        $('#device_check_gps').text('GPS disabled *check phone setting* ');
        $("#user_device_check_gps").show();
        $("#user_device_check_gps").html('<b>GPS disabled *check phone setting*</b> ');
      } else {
        $("#device_check_gps").hide();
        $("#user_device_check_gps").hide();
      }

      $('#gps_setting').css("color", "red");
      $('#gps_setting').html("<b>Disabled</b> *check phone setting*");

    }
    // console.log("Location is " + (enabled ? "enabled" : "disabled"));
  }, function(error) {
    console.error("The following error occurred: " + error);
  });

 //show the begin button ONLY if all the 3 conditions (good network, gps, wifi) are met
  if (startAppCheck == false) {
    if (((bluetoothCheck == true) && (gpsCheck == true))|| (networkCheck == true)) {
      $("#begin").show();
      $("#placeholderBegin").hide();
    }
  } else {
    $("#begin").hide();
    $("#placeholderBegin").show();
  }

};

