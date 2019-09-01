void consoleLog(){

  Serial.print("Top Arm = ");
  Serial.print(digitalRead(tiltSwitch1));
  Serial.print(" , ");
  Serial.print(digitalRead(tiltSwitch2));
  Serial.print(" , ");
  Serial.print(digitalRead(tiltSwitch3));
  Serial.print(" , ");
  Serial.print(analogRead(pressureSensor1));

  Serial.print(" , Middle Arm = ");
  Serial.print(digitalRead(tiltSwitch4));
  Serial.print(" , ");
  Serial.print(digitalRead(tiltSwitch5));
  Serial.print(" , ");
  Serial.print(digitalRead(tiltSwitch6));
  Serial.print(" , ");
  Serial.print(analogRead(pressureSensor2));

  Serial.print(" , Hand = ");
  Serial.print(digitalRead(tiltSwitch7));
  Serial.print(" , ");
  Serial.print(digitalRead(tiltSwitch8));
  Serial.print(" , ");
  Serial.print(digitalRead(tiltSwitch9));
  Serial.print(" , ");
  Serial.println(analogRead(pressureSensor3));

  //console.log all sensor data individually
  //  Serial.print(analogRead(pressureSensor1));
  //  Serial.print(" , ");
  //  Serial.print(analogRead(pressureSensor2));
  //  Serial.print(" , ");
  //  Serial.print(analogRead(pressureSensor3));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch1));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch2));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch3));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch4));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch5));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch6));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch7));
  //  Serial.print(" , ");
  //  Serial.print(digitalRead(tiltSwitch8));
  //  Serial.print(" , ");
  //  Serial.println(digitalRead(tiltSwitch9));
}





