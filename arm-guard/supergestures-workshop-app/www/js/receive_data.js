app.receivedData = function(data) {

	if (app.connected) {
		var data = new Uint8Array(data);
		// data are sent in packet of 3: (pin, value0, value1), (pin, value0, value1), etc
		var chunkSize = 3;
		// slicing data in chunk of 3
		for (var i = 0; i < data.length; i += chunkSize) {
			// manually getting the 2nd and 3rd data set ( value0 and value1)
			var value = (data[i + 1] << 8) | data[i + 2];

			//portal for A3 analog input pin 
			if (data[i] === 0x0C) {
				if (analog_enabled_A3) {
					if (value > 0) {
						A3reading = value;
						A3reading = A3reading.toString();

						top_arm_1 = parseInt(A3reading[0])-1;
						top_arm_2 = parseInt(A3reading[1])-1;
						top_arm_3 = parseInt(A3reading[2])-1;
						arm_circle = parseInt(A3reading[3])-1;

						document.getElementById("valueA3").innerHTML = "<b>Top Arm</b><br> Tilt switch 1 = <b>" + top_arm_1  //deduct by 2 and you will get some sort of a binary language i.e. 1(HIGH) and 0(LOW)
						+ "</b><br> Tilt Switch 2 = <b>" + top_arm_2
						+ "</b><br> Tilt Switch 3 = <b>" + top_arm_3
						+ "</b><br> Pressure Sensor = <b>" + arm_circle+"</b>";

						$('#valueA3').css("color", "black");

						//process info to reflect on body parts visual
						checkTopArm();

					} else if (A3reading == undefined) {
						document.getElementById("valueA3").innerHTML = "<b> Top Arm = " + A3reading + "</b>";
						$('#valueA3').css("color", "red");
					} else {
						document.getElementById("valueA3").innerHTML = "<b> Top Arm = " + A3reading + "</b>";
						$('#valueA3').css("color", "red");
					}
				}
			}

			//portal for A4 analog input pin 
			if (data[i] === 0x0A) {
				if (analog_enabled_A4) {

					if (value > 0) {
						A4reading = value;
						A4reading = A4reading.toString();

						middle_arm_1 = parseInt(A4reading[0])-3;
						middle_arm_2 = parseInt(A4reading[1])-3;
						middle_arm_3 = parseInt(A4reading[2])-3;
						wrist_circle = parseInt(A4reading[3])-3;

						document.getElementById("valueA4").innerHTML = "<b>Middle Arm</b><br> Tilt switch 1 = <b>" + middle_arm_1  //deduct by 2 and you will get some sort of a binary language i.e. 1(HIGH) and 0(LOW)
						+ "</b><br> Tilt Switch 2 = <b>" + middle_arm_2
						+ "</b><br> Tilt Switch 3 = <b>" + middle_arm_3
						+ "</b><br> Pressure Sensor = <b>" + wrist_circle+"</b>";

						$('#valueA4').css("color", "black");

						//process info to reflect on body parts visual
						checkMiddleArm();

					} else if (A4reading == undefined) {
						document.getElementById("valueA4").innerHTML = "<b> Middle Arm = " + A4reading + "</b>";
						connect_to_A4 = false;
					} else {
						document.getElementById("valueA4").innerHTML = "<b> Middle Arm = " + A4reading + "</b>";
						$('#valueA4').css("color", "red");
					}
				}
			}

			//portal for A5 analog input pin 
			if (data[i] === 0x0B) {
				if (analog_enabled_A5) {

					if (value > 0) {
						A5reading = value;
						A5reading = A5reading.toString();

						hand_1 = parseInt(A5reading[0])-5;
						hand_2 = parseInt(A5reading[1])-5;
						hand_3 = parseInt(A5reading[2])-5;
						palm_circle = parseInt(A5reading[3])-5;

						document.getElementById("valueA5").innerHTML = "<b>Hand</b><br> Tilt switch 1 = <b>" + hand_1  //deduct by 2 and you will get some sort of a binary language i.e. 1(HIGH) and 0(LOW)
						+ "</b><br> Tilt Switch 2 = <b>" + hand_2
						+ "</b><br> Tilt Switch 3 = <b>" + hand_3
						+ "</b><br> Pressure Sensor = <b>" + palm_circle+"</b>";

						$('#valueA5').css("color", "black");

						checkHand();

						if (A5reading >= 5556){
							//test audio stream
							// audioFileStream();
							//test sending server something
							// sendSocket(A5reading);
						}

					} else if (A5reading == undefined) {
						document.getElementById("valueA5").innerHTML = "<b> Hand = " + A5reading + "</b>";
						$('#valueA5').css("color", "red");
					} else {
						document.getElementById("valueA5").innerHTML = "<b> Hand = " + A5reading + "</b>";
						$('#valueA5').css("color", "red");
					}
				}
			}

			// else if (data[0] === 0x0C)
			// 		{
			// 		$('#digitalInputResult').text(data[1] ? 'High' : 'Low');
			// 		}
			else if (data[i] === 0x0D) {
				// alert("hey");
				//send a tracker count to phone, for debugging if app quit by accident
				// activate();
				//make sure counter counts btw 0-100
				if (dataReceivedTracker > 500) {
					dataReceivedTracker = 0;
					dataReceivedTracker++;
				} else {
					dataReceivedTracker++;
				}
				keepTrackConnection();
			}

		}
	} else {
		// Write debug information to console
		// alert('Error - No device connected.');
	}

};
//enable/disable A3 analog pin on and off
app.toggelAnalogA3 = function() {
	if (analog_enabled_A3) {
		analog_enabled_A3 = false;
		localStorage.analog_enabled_A3 = analog_enabled_A3;
		app.sendData([0xA0, 0x06, 0x00]); // send to hardware to turn A3 off
	} else {
		analog_enabled_A3 = true;
		localStorage.analog_enabled_A3 = analog_enabled_A3;
		app.sendData([0xA0, 0x05, 0x00]); // send to hardware to turn A3 on
	}
};

//enable/disable A4 analog pin on and off
app.toggelAnalogA4 = function() {
	if (analog_enabled_A4) {
		analog_enabled_A4 = false;
		localStorage.analog_enabled_A4 = analog_enabled_A4;
		app.sendData([0xA0, 0x02, 0x00]); // send to hardware to turn A4 off
	} else {
		analog_enabled_A4 = true;
		localStorage.analog_enabled_A4 = analog_enabled_A4;
		app.sendData([0xA0, 0x01, 0x00]); // send to hardware to turn A4 on
	}
};

//enable/disable A5 analog pin on and off
app.toggelAnalogA5 = function() {
	if (analog_enabled_A5) {
		analog_enabled_A5 = false;
		localStorage.analog_enabled_A5 = analog_enabled_A5;
		app.sendData([0xA0, 0x04, 0x00]); // send to hardware to turn A5 off
	} else {
		analog_enabled_A5 = true;
		localStorage.analog_enabled_A5 = analog_enabled_A5;
		app.sendData([0xA0, 0x03, 0x00]); // send to hardware to turn A5 on
	}
};


//A tracking function that checks constantly to see whether phone app is still connected to device, if not disconnect
var trackConnection;

function keepTrackConnection() {
	//set a delay in count so that countTracker is always running behind dataReceivedTracker when app is connected
	trackConnection = setTimeout(startTracking, 1000);
}

function startTracking() {

	//make sure counter counts btw 0-100
	if (countTracker > 500) {
		countTracker = 0;
		countTracker++;
	} else {
		countTracker++;
	}
	// if diff is 0, it means dataReceivedTracker has stopped =  app disconnected
	var countDiff = dataReceivedTracker - countTracker;

	//if device is disconnected, countDiff will hit 0 at somepoint
	if (countDiff == 0) {

		//send a beep notification if device is disconnected from app while it is running in background
		if (cordova.plugins.backgroundMode.isActive() == true) {

			cordova.plugins.notification.local.schedule({
				id: 1,
				text: "Lost connection with device",
			});

		};

		//if in user mode(lockScreenStatus == true), rescan for that particular device that was once connected
		if (lockScreenStatus == true) {

			connectedDevice = undefined;

			$("#user_device_connection").show();

			app.startScan();

			//else if in designer mode, move on the disconnected device page
		} else {

			app.disconnect();

		}

		if (userQuitApp == true) {

			//check whether user has quit app before and reconnect as well
			userQuitAppReconnect = true;

			connectedDevice = undefined;

			$("#user_device_connection").show();

			app.startScan();

		}
	}
}