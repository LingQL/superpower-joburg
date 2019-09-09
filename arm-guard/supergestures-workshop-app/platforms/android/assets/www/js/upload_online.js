var device_number = "device_3";

app.toggleUploadOnline = function() { //START uploading
  if(upload_to_online==false){
    upload_to_online = true;
    $('#uploadOnline').css("background-color", "green");
    $('#uploadOnline').html("Uploading data...");
    
    if(update_spreadsheet == false){
      update_spreadsheet = true;
      tick_tock_spreadsheet = setInterval(update_spreadsheet_function, 5000); // send data to spreadsheet every 2s
    }else{
      update_spreadsheet = true;
    }

  }else if(upload_to_online==true){ // STOP uploading 
    upload_to_online = false;
    $('#uploadOnline').css("background-color", "grey");
    $('#uploadOnline').html("Upload Online");

    if(update_spreadsheet == true){
      update_spreadsheet =false;
      clearInterval(tick_tock_spreadsheet);
    }else{
      update_spreadsheet =false;
    }
  }
}

function update_spreadsheet_function() {
  if(myLocationLat == undefined){
    myLocationLat = 0;
  }
  if(myLocationLong == undefined){
    myLocationLong = 0;
  }
  var txt = '{"'+current_latitude+'":"'+myLocationLat+'", "'+current_longitude+'":'+myLocationLong+', "'+current_tilt_switch_1_top_arm+'":'+top_arm_1+', "'+current_tilt_switch_2_top_arm+'":'+top_arm_2+', "'+current_tilt_switch_3_top_arm+'":'+top_arm_3+', "'+current_pressure_sensor_top_arm+'":'+arm_circle+', "'+current_tilt_switch_1_middle_arm+'":'+middle_arm_1+', "'+current_tilt_switch_2_middle_arm+'":'+middle_arm_2+', "'+current_tilt_switch_3_middle_arm+'":'+middle_arm_3+', "'+current_pressure_sensor_middle_arm+'":'+wrist_circle+', "'+current_tilt_switch_1_hand+'":'+hand_1+', "'+current_tilt_switch_2_hand+'":'+hand_2+', "'+current_tilt_switch_3_hand+'":'+hand_3+', "'+current_pressure_sensor_hand+'":'+palm_circle+'}'
  var objData = JSON.parse(txt);

  $.post((current_uri),objData,
 
  function(data, status) {
    navigator.vibrate(1000);
     //console.log(status);
    //tick_tock_spreadsheet();
  });

}

//load corresponsing spreadsheet info
function load_spreadsheet_info(){
    $.getJSON( "json/spreadsheet_info.json", function(obj) { 
      for(var i=0; i<obj.length;i++){
        if(obj[i].id == device_number){
          current_uri = obj[i].uri;
          current_latitude = obj[i].latitude;
          current_longitude = obj[i].longitude;
          current_tilt_switch_1_top_arm = obj[i].tilt_switch_1_top_arm;
          current_tilt_switch_2_top_arm = obj[i].tilt_switch_2_top_arm;
          current_tilt_switch_3_top_arm = obj[i].tilt_switch_3_top_arm;
          current_pressure_sensor_top_arm = obj[i].pressure_sensor_top_arm;

          current_tilt_switch_1_middle_arm = obj[i].tilt_switch_1_middle_arm;
          current_tilt_switch_2_middle_arm = obj[i].tilt_switch_2_middle_arm;
          current_tilt_switch_3_middle_arm = obj[i].tilt_switch_3_middle_arm;
          current_pressure_sensor_middle_arm = obj[i].pressure_sensor_middle_arm;

          current_tilt_switch_1_hand = obj[i].tilt_switch_1_hand;
          current_tilt_switch_2_hand = obj[i].tilt_switch_2_hand;
          current_tilt_switch_3_hand = obj[i].tilt_switch_3_hand;
          current_pressure_sensor_hand = obj[i].pressure_sensor_hand;
        }
      }
    });  
    //setTimeout(update_spreadsheet_function, 2000); //check data is logged to spreadsheet
}
