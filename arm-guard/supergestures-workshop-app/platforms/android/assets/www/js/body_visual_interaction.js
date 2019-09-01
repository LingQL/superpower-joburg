var wrist_circle;
var palm_circle;
var arm_circle;

var top_arm_1;
var top_arm_2;
var top_arm_3;

var middle_arm_1;
var middle_arm_2;
var middle_arm_3;

var hand_1;
var hand_2;
var hand_3;

function checkTopArm(){
  if (top_arm_1 == 1){
    $('#top_arm_1').css('opacity', 1);
  }else{
    $('#top_arm_1').css('opacity', 0.4);
  }

  if (top_arm_2 == 1){
    $('#top_arm_2').css('opacity', 1);
  }else{
    $('#top_arm_2').css('opacity', 0.4);
  }

  if (top_arm_3 == 1){
    $('#top_arm_3').css('opacity', 1);
  }else{
    $('#top_arm_3').css('opacity', 0.4);
  }

  if (arm_circle == 1){
    $('#arm_circle').css('opacity', 1);
  }else{
    $('#arm_circle').css('opacity', 0.4);
  }
}

function checkMiddleArm(){
  if (middle_arm_1 == 1){
    $('#middle_arm_1').css('opacity', 1);
  }else{
    $('#middle_arm_1').css('opacity', 0.4);
  }

  if (middle_arm_2 == 1){
    $('#middle_arm_2').css('opacity', 1);
  }else{
    $('#middle_arm_2').css('opacity', 0.4);
  }

  if (middle_arm_3 == 1){
    $('#middle_arm_3').css('opacity', 1);
  }else{
    $('#middle_arm_3').css('opacity', 0.4);
  }

  if (wrist_circle == 1){
    $('#wrist_circle').css('opacity', 1);
  }else{
    $('#wrist_circle').css('opacity', 0.4);
  }
}

function checkHand(){
  if (hand_1 == 1){
    $('#hand_1').css('opacity', 1);
  }else{
    $('#hand_1').css('opacity', 0.4);
  }

  if (hand_2 == 1){
    $('#hand_2').css('opacity', 1);
  }else{
    $('#hand_2').css('opacity', 0.4);
  }

  if (hand_3 == 1){
    $('#hand_3').css('opacity', 1);
  }else{
    $('#hand_3').css('opacity', 0.4);
  }

  if (palm_circle == 1){
    $('#palm_circle').css('opacity', 1);
  }else{
    $('#palm_circle').css('opacity', 0.4);
  } 
}
