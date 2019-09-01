void readSensor(){
  //read all tilt switch sensor values 
  if(digitalRead(tiltSwitch1)==HIGH){
    tiltState1 = 30000; //cheat code: set it to a digit 3 so that when it parse to phone, phone will minus 2 = 1 (binary language)
    digitalWrite(greenLed, HIGH); 
  }
  else{
    tiltState1 = 20000;  //cheat code: set it to a digit 2 so that when it parse to phone, phone will minus 2 = 0(binary language)
    digitalWrite(greenLed, LOW);   
  }

  if(digitalRead(tiltSwitch2)==HIGH){
    tiltState2 = 3000; 
    digitalWrite(yellowLed, HIGH);     
  }
  else{
    tiltState2 = 2000;
    digitalWrite(yellowLed, LOW); 
  }

  if(digitalRead(tiltSwitch3)==HIGH){
    tiltState3 = 300 ;   
    digitalWrite(redLed, HIGH);     
  }
  else{
    tiltState3 = 200;
    digitalWrite(redLed, LOW);  
  }

  if(digitalRead(tiltSwitch4)==HIGH){
    tiltState4 = 30;         
  }
  else{
    tiltState4 = 20;
  }

  if(digitalRead(tiltSwitch5)==HIGH){
    tiltState5 = 3 ;      
  }
  else{
    tiltState5 = 2;
  }

  //read all pressure sensor values
  if(analogRead(A1)>50){
    sensorValue1 = 300;
  }
  else{
    sensorValue1 = 200;
  }

  if(analogRead(A2)>50){
    sensorValue2 = 30;
  }
  else{
    sensorValue2 = 20;
  }

  if(analogRead(A3)>50){
    sensorValue3 = 3;
  }
  else{
    sensorValue3 = 2;
  }

  allTiltSwitches = tiltState1 + tiltState2 + tiltState3 + tiltState4 + tiltState5;
  allPressureSwitches =  sensorValue1  + sensorValue2 + sensorValue3;
}

