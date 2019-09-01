//handles all vibration interaction
void vibrationRhythm(){

  long vibrationArray[] = {
    50, 100, 50, vibrationTempo                                                             };

  if ((millis() - prevMillisTime) > (long)(vibrationArray[vibrationIndex])){
    vibrationIndex++;
    if (vibrationIndex > 3) vibrationIndex = 0;

    if ((vibrationIndex % 2) == 0){    
      digitalWrite(vibrationMotor, HIGH);
    }
    else{ 
      digitalWrite(vibrationMotor, LOW); 
    }
    //  Serial.println(hbeatIndex);
    prevMillisTime = millis();
  }

}
