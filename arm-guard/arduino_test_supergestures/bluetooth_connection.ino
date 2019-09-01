//handles all bluetooth interaction
void bluetooth_connection(){
  ////////BLUETOOTH ACTION//////
  static byte old_state = LOW;
  static boolean analog_enabled_A3 = false; //enable analog reading on analog pin A4
  static boolean analog_enabled_A4 = false; //enable analog reading on analog pin A4
  static boolean analog_enabled_A5 = false; //enable analog reading on analog pin A4

  // If data is ready
  while(ble_available())
  {
     //indicate green light
    digitalWrite(ledRed, LOW);
    digitalWrite(ledGreen, HIGH);
    
    // read out command and data
    byte data0 = ble_read();  // read which pin is targeted for controlling  
    byte data1 = ble_read();  // enable analog reading 
    byte data2 = ble_read();  // control all digital putput pins

    if (data0 == 0xA0) // Command is to enable analog in reading - binary: 10100000 (data 0) 
    {

      if (data1 == 0x01){  // binary:  00000001 (data 1) 
        analog_enabled_A4 = true;
      }
      else if (data1 == 0x02){  // binary: 00000010 (data 1)
        analog_enabled_A4 = false;
      }
      else if (data1 == 0x03){  // binary: 00000011 (data 1)
        analog_enabled_A5 = true;
      }
      else if (data1 == 0x04){  // binary: ? (data 1)
        analog_enabled_A5 = false;
      }
      else if (data1 == 0x05){  // binary: 00000011 (data 1)
        analog_enabled_A3 = true;
      }
      else if (data1 == 0x06){  // binary: ? (data 1)
        analog_enabled_A3 = false;
      }
    }

    else if (data0 == 0x04) //command to change everything to default state (off mode) - binary: 00000100 (data 0)
    {
      analog_enabled_A3 = false;
      analog_enabled_A4 = false;
      analog_enabled_A5 = false;
    }
  }

  if (analog_enabled_A3)  // if analog reading enabled
  {
    // Read and send out
    uint16_t valueA3 = allTiltSwitchesTopArm;
    tracker();
    ble_write(0x0C);  // binary: 00001011 (data 0) 
    ble_write(valueA3 >> 8); 
    ble_write(valueA3);
  } 


  if (analog_enabled_A4)  // if analog reading enabled
  {
    // Read and send out
    uint16_t valueA4 = allTiltSwitchesMiddleArm;
    tracker();
    ble_write(0x0A);  // binary: 00001011 (data 0) 
    ble_write(valueA4 >> 8); 
    ble_write(valueA4);
  } 


  if (analog_enabled_A5)  // if analog reading enabled
  {
    // Read and send out
    uint16_t valueA5 =allTiltSwitchesHand ;
    tracker();
    ble_write(0x0B);  // binary: 00001011 (data 0) 
    ble_write(valueA5 >> 8);
    ble_write(valueA5);
  } 

  if (!ble_connected())  // if ble is not connected, set everything to off
  {
    analog_enabled_A3 = false;
    analog_enabled_A4 = false;
    analog_enabled_A5 = false;
    trackerFromApp = 0;
    x =0;
    //indicate red light
    digitalWrite(ledRed, HIGH);
    digitalWrite(ledGreen, LOW);
  } 
  else{
    tracker();
  }
  // Allow BLE Shield to send/receive data
  ble_do_events();
}

void tracker(){
  //this part of tracking function is to track whether when device gets disconnected, 
  //whether phone still think its receiving something from device
  int connectionTracker= 1;
  //  Serial.println(connectionTracker);
  uint16_t trackerState = connectionTracker;
  ble_write(0x0D);  
  ble_write(trackerState >> 8); 
  ble_write(trackerState); 
};




