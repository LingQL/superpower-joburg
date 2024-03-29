window.addEventListener("load", function load(event) {
  window.removeEventListener("load", load, false); //remove listener, no longer needed
  startApplication();
  console.log("app loaded");
}, false);

function startApplication() {
  //if the app quit and restart while in end user interface, check its prev lock screen status 
  //OR if the app quit during designer interface, lockscreen is false by default
  if ((localStorage.lockScreenStatus == "false") || (localStorage.lockScreenStatus == undefined)) {

    openMainPage();

  } else {

    userQuitApp = true;

    $('body').css("background-color", "#ffa500"); // change the colour of the background of the whole app screen
    $('#app_restarted_status').html("<b>App restarted</b><br>Reinitializing...");
    $("#app_restarted_status").fadeOut(3000, goToUserMode());

    $("#title").hide();
    $("#instruction").hide();
    $("#endUserContent").hide(); // end user UI content
    $("#device_check_bluetooth").hide();
    $("#device_check_network").hide();
    $("#device_check_gps").hide();
    $("#loading_status").hide();
    $("#scanDevicePage").hide();
    $("#disconnectDevice").hide();
    $("#confirmationPage").hide();
    $("#anotherToken").hide();
    $("#AppContent").hide();
    $("#AppControl").hide();
    $("#connectedData").hide();
    $("#user_device_connection").hide();
    $("#begin").hide();
    $("#placeholderBegin").hide();
  }

}

function openMainPage() {

  userQuitApp = false;

  $("#goToUserMode").hide();
  $("#goToDesignerMode").hide();

  $("#title").show();
  $("#instruction").show();

  $("#endUserContent").hide(); // end user UI content

  $("#device_check_bluetooth").hide();
  $("#device_check_network").hide();
  $("#device_check_gps").hide();
  $("#device_check_panel_D9_D10").hide();

  $("#loading_status").hide();
  $("#scanDevicePage").hide();
  $("#disconnectDevice").hide();
  $("#confirmationPage").hide();
  $("#anotherToken").hide();

  $("#AppContent").hide();
  $("#AppControl").hide();
  $("#connectedData").hide();

  $("#user_device_connection").hide();

  $("#begin").hide();
  $("#placeholderBegin").show();

}

//start app when user press begin button
function startApp() {
  startAppCheck = true;
  $("#title").hide();
  $("#instruction").hide();
  $('#panel_title').html('Scan for hardware to connect to phone app');
  $('#panel_image').attr("src", "img/Scan_for_device.png");
  $("#scanDevicePage").show();
  $("#disconnectDevice").hide();
  $("#confirmationPage").hide();
  $("#anotherToken").hide();
  $("#AppContent").hide();
  $("#AppControl").hide();
  $("#AppConnectivityControl").hide();
  $("#AppGlobalConnectivityControl").hide();
  $("#tokenKeyPage").hide();
  $("#connectedData").hide();
};