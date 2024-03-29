function goToUserMode() {

	setTimeout(function() {

		lockScreenStatus = localStorage.lockScreenStatus;

		$("#user_device_connection").show();
		$("#endUserContent").show();
		$("#userlockScreen").show();

		startAppCheck = true;
		checkingDeviceSetting();

		$('link[href="css/global.css"]').attr('href', 'css/user.css'); // switch to user css file, designer can alter the code to change the UI
		app.startScan();

	}, 3000); //start this function only after 3 second when app is fully initialise on the backend

};

//once the app is connected to the device again, set condition back to before app quits after 2s delay after app.startScan() is initialized
function openEndUserUI() {

	setTimeout(function() {

		localStorage.lockScreenStatus = lockScreenStatus;

		//when user lock screen, it automatically save the settings on the designer control panel 

		useState(); // use previous saved state for device control panel

		useState_connectivity(); // use previous saved state for cross connectivity panel

		useState_global_connectivity(); // use previous saved state for global connectivity panel

	}, 2000);
};