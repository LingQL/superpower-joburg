var device_number = "device_2";

app.toggleUploadOnline = function() { //START uploading
  if(upload_to_online==false){
    upload_to_online = true;
    $('#uploadOnline').css("background-color", "green");
    $('#uploadOnline').html("Uploading data...");
    
    if(update_spreadsheet == false){
      update_spreadsheet = true;
      tick_tock_spreadsheet = setInterval(update_spreadsheet_function, 2000); // send data to spreadsheet every 2s
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
  var txt = '{"'+current_latitude+'":"1.64932841", "'+current_longitude+'":2.08321841, "'+current_tilt_switch_1_top_arm+'":3.08321841, "'+current_tilt_switch_2_top_arm+'":4.08321841, "'+current_tilt_switch_3_top_arm+'":5.08321841, "'+current_pressure_sensor_top_arm+'":6.08321841, "'+current_tilt_switch_1_middle_arm+'":7.08321841, "'+current_tilt_switch_2_middle_arm+'":8.08321841, "'+current_tilt_switch_3_middle_arm+'":9.08321841, "'+current_pressure_sensor_middle_arm+'":10.08321841, "'+current_tilt_switch_1_hand+'":11.08321841, "'+current_tilt_switch_2_hand+'":12.08321841, "'+current_tilt_switch_3_hand+'":13.08321841, "'+current_pressure_sensor_hand+'":14.08321841}'
  var objData = JSON.parse(txt);

  $.post((current_uri),objData,
 
  function(data, status) {
     console.log(status);
    //tick_tock_spreadsheet();
  });

}

//test json file format
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
    setTimeout(update_spreadsheet_function, 2000); //check data is logged to spreadsheet
}
