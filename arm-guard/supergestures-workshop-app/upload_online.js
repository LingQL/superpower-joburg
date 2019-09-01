var device_number = "device_11";

var spreadsheet_device_4_arm_guard = "https://docs.google.com/forms/d/1nHr7QJruq53Ko17dg4eOdmT_uV_TMBM6H_cSTBEjSTk/formResponse";
var spreadsheet_device_11_arm_guard = "https://docs.google.com/forms/d/1Kmdmp-k2DuPt3KRUXSrCbwu9ZWtKukOsPsHkqyQmQmk/formResponse";
var spreadsheet_device_9_arm_guard = "https://docs.google.com/forms/d/1wKBwCHURU1yVJtg6b7o4THEmLeWNhmr_-WJcUMhQWRY/formResponse";
var spreadsheet_device_1_arm_guard = "https://docs.google.com/forms/d/1QkAjpOMARABXIZZCK2NfYiDDi2uCGh_-BDWVRdSrfjc/formResponse";
var spreadsheet_device_6_arm_guard = "https://docs.google.com/forms/d/17HSskqG8UcwNyg1zfXCIUDDPAQhkIwOeUiH-GltsLOc/formResponse";
var spreadsheet_device_8_arm_guard = "https://docs.google.com/forms/d/169W2v6CUIlVTHTd7V7zyF7EaoAjDbG6ewC3Oo9YUotE/formResponse";
var spreadsheet_device_7_arm_guard = "https://docs.google.com/forms/d/1xbhTvsEKHgKavBeGXKo-SgVfyzvDWzx-lUqFZVHzL2U/formResponse";
var spreadsheet_device_3_arm_guard = "https://docs.google.com/forms/d/1BtzIa8Ije_DRo52H_pbd7PVMtSWnT_wwD6ajS676vxQ/formResponse";
var spreadsheet_device_10_arm_guard = "https://docs.google.com/forms/d/107M8ifyoPb9yBtOSo9HSLZR-lwS0hWXYNzLywQEPYQA/formResponse";
var spreadsheet_device_5_arm_guard = "https://docs.google.com/forms/d/11Cskbbdgvhij6juFrHbhzamCywsDPmld7yheP6Rg0Gg/formResponse";
var spreadsheet_device_2_arm_guard = "https://docs.google.com/forms/d/13pGfNypQZXgAFalM48zxEp_PJPdYK0mIL3KI4icLoo8/formResponse";


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
  $.post(eval("spreadsheet_"+device_number+"_arm_guard"),{
    entry_1143990561: myLocationLat,
    entry_320918208: myLocationLong,
    entry_1443882037: top_arm_1, //tilt switch 1 - top arm 
    entry_251170206: top_arm_2, //tilt switch 2 - top arm 
    entry_492981918: top_arm_3, //tilt switch 3 - top arm 
    entry_1598922670: arm_circle, //pressure sensor 1 - top arm
    entry_375272715: middle_arm_1, //tilt switch 1 - middle arm 
    entry_578202177: middle_arm_2, //tilt switch 2 - middle arm 
    entry_399640956: middle_arm_3, //tilt switch 3 - middle arm 
    entry_1996589343: wrist_circle, //pressure sensor 2 - middle arm
    entry_2031927704: hand_1, //tilt switch 1 - hand  
    entry_1135254753: hand_2, //tilt switch 2 - hand 
    entry_1986840059: hand_3, //tilt switch 3 - hand
    entry_506920882: palm_circle, //pressure sensor 3 - hand
    submit: "Submit",

  },

  function(data, status) {
    // console.log(status);
    //tick_tock_spreadsheet();
  });
}
