void bluetooth(){
  ////////BLUETOOTH ACTION//////
  static byte old_state = LOW;
  static boolean analog_enabled_A4 = false; //enable analog reading on analog pin A4
  static boolean analog_enabled_A5 = false; //enable analog reading on analog pin A4

  // If data is ready
  while(ble_available())
  {
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
    }

    else if (data0 == 0x04) //command to change everything to default state (off mode) - binary: 00000100 (data 0)
    {
      analog_enabled_A4 = false;
      analog_enabled_A5 = false;
    }
  }

  if (analog_enabled_A4)  // if analog reading enabled
  {
    // Read and send out
    uint16_t valueA4 = allTiltSwitches;
    tracker();
    ble_write(0x0A);  // binary: 00001011 (data 0) 
    ble_write(valueA4 >> 8); 
    ble_write(valueA4);
  } 

  if (analog_enabled_A5)  // if analog reading enabled
  {
    // Read and send out
    uint16_t valueA5 = allPressureSwitches;
    tracker();
    ble_write(0x0B);  // binary: 00001011 (data 0) 
    ble_write(valueA5 >> 8); 
    ble_write(valueA5);
  } 

  // If digital in changes, report the state
  if (digitalRead(digitalPin12) != old_state)
  {
    old_state = digitalRead(digitalPin12);

    if (digitalRead(digitalPin12) == HIGH)
    {
      ble_write(0x0C);
      ble_write(0x01);
      ble_write(0x00);    
    }
    else
    {
      ble_write(0x0C);
      ble_write(0x00);
      ble_write(0x00);
    }
  }

  if (!ble_connected())  // if ble is not connected, set everything to off
  {
    analog_enabled_A4 = false;
    analog_enabled_A5 = false;
    trackerFromApp = 0;
    x =0;
    digitalWrite(redLed, HIGH); 
    digitalWrite(greenLed, LOW); 
    digitalWrite(yellowLed, LOW);
  } 
  else{
    tracker();
  }
  // Allow BLE Shield to send/receive data
  ble_do_events();

}


