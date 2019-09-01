app.toggleLockScreen = function() {

	if (lockScreenStatus) {

	} else {
		//in end user mode
		lockScreenStatus = true;
		localStorage.lockScreenStatus = lockScreenStatus;
		$('body').css("background-color", "#ffa500"); // change the colour of the background of the whole app screen
		$('link[href="css/global.css"]').attr('href', 'css/user.css'); // switch to user css file, designer can alter the code to change the UI 
		$("#endUserContent").show(); // open end user UI interface html content
		$("#AppContent").hide(); // hide default app html content
		$("#disconnectDevice").hide();
		$('#AppControl').hide();
		$('#disconnectButton').hide();
	}
};

//function for verification screen
function verifyPassword() {

		//in designer mode
		lockScreenStatus = false; // app is back to designer mode
		userQuitApp = false; //app is back to normal
		userQuitAppReconnect = false;

		localStorage.lockScreenStatus = lockScreenStatus;
		$("#endUserContent").hide(); // hide end user UI interface html content

		$('body').css("background-color", "white"); //back to default colour
		$('link[href="css/user.css"]').attr('href', 'css/global.css'); // switch back to default css file

		$("#AppContent").show(); // open default app html content
		$("#disconnectDevice").show();
		$('#AppControl').show();
		$('#disconnectButton').show();

		if (connectedDevice == undefined) {
			app.disconnect();
		}

};


