void consoleLog(){
  //check whether all sensors are working
  Serial.print("Hand Tilt = ");
  Serial.print(digitalRead(tiltSwitch1));
  Serial.print(", ");
  Serial.print(digitalRead(tiltSwitch2));
  Serial.print(", ");
  Serial.print(digitalRead(tiltSwitch3));
  Serial.print(", Wrist = ");
  Serial.print(digitalRead(tiltSwitch4));
  Serial.print(", Arm = ");
  Serial.print(digitalRead(tiltSwitch5));
  Serial.print(", Pressure = ");
  Serial.print(analogRead(A1));
  Serial.print(", ");
  Serial.print(analogRead(A2));
  Serial.print(", ");
  Serial.println(analogRead(A3));
}


