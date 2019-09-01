function confirmPrelude() {

    $('#panel_title').html("Loading...");

    setTimeout(confirm, 2000); // give it 2 second to load the functions the confirm()
}

//move to scan device page and validate thingspeak data
function confirm() {

    if (connectedDevice == true) {

        $("#lockScreen").show();

        if (userQuitApp == false) {

            $("#AppControl").show();
            $("#app_control_content").hide();
            $("#AppContent").show();
            $('.connectA5').hide();
            $('#connectA5status').hide();
            $('#geoStatus').hide();
            $('.connectA4').hide();
            $('#connectA4status').hide();
            $('#tokenKeyPage').hide();
            $("#confirmationPage").hide();
        }

    } else {

        $("#lockScreen").show();
        $("#scanDevicePage").show();
        $('#tokenKeyPage').hide();
        $("#confirmationPage").hide();
    }

};


