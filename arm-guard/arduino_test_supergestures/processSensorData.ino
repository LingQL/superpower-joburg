//process all sensor data and categorise them into the right body parts
void processSensorData(){

  //////////TOP ARM SENSOR //////////
  //read all tilt switch sensor values, issue: arduino cant parse info in 1 string to cordova app, so have to do cheat code
  if(digitalRead(tiltSwitch1) == HIGH){
    tiltSwitch1_state = 2000; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch1_state = 1000;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }

  if(digitalRead(tiltSwitch2) == HIGH){
    tiltSwitch2_state = 200; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch2_state = 100;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }

  if(digitalRead(tiltSwitch3) == HIGH){
    tiltSwitch3_state = 20; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch3_state = 10;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }

  if(analogRead(pressureSensor1)>50){
    pressureSensor_value1 = 2;
  }
  else{
    pressureSensor_value1 = 1;
  }

  //////////MIDDLE ARM SENSOR//////////
  //read all tilt switch sensor values, issue: arduino cant parse info in 1 string to cordova app, so have to do cheat code
  if(digitalRead(tiltSwitch4) == HIGH){
    tiltSwitch4_state = 4000; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch4_state = 3000;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }

  if(digitalRead(tiltSwitch5) == HIGH){
    tiltSwitch5_state = 400; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch5_state = 300;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }

  if(digitalRead(tiltSwitch6) == HIGH){
    tiltSwitch6_state = 40; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch6_state = 30;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }
  if(analogRead(pressureSensor2)>50){
    pressureSensor_value2 = 4;
  }
  else{
    pressureSensor_value2 = 3;
  }


  //////////HAND SENSOR //////////
  //read all tilt switch sensor values, issue: arduino cant parse info in 1 string to cordova app, so have to do cheat code
  if(digitalRead(tiltSwitch7) == LOW){
    tiltSwitch7_state = 6000; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch7_state = 5000;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }

  if(digitalRead(tiltSwitch8) == LOW){
    tiltSwitch8_state = 600; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch8_state = 500;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }

  if(digitalRead(tiltSwitch9) == LOW){
    tiltSwitch9_state = 60; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
  }
  else{
    tiltSwitch9_state = 50;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
  }
  if(analogRead(pressureSensor3)>50){
    pressureSensor_value3 = 6;
  }
  else{
    pressureSensor_value3 = 5;
  }


  allTiltSwitchesTopArm = tiltSwitch1_state + tiltSwitch2_state + tiltSwitch3_state + pressureSensor_value1;
  allTiltSwitchesMiddleArm = tiltSwitch4_state + tiltSwitch5_state + tiltSwitch6_state + pressureSensor_value2;
  allTiltSwitchesHand = tiltSwitch7_state + tiltSwitch8_state + tiltSwitch9_state + pressureSensor_value3; 

  //  Serial.print(allTiltSwitchesTopArm);
  //  Serial.print(" , ");
  //  Serial.print(allTiltSwitchesMiddleArm);
  //  Serial.print(" , ");
  //  Serial.println(allTiltSwitchesHand);
}





