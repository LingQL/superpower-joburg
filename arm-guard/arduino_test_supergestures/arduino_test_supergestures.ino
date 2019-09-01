#include <Adafruit_NeoPixel.h>
#include <SPI.h>
#include <boards.h>
#include <RBL_nRF8001.h>

#define LED 1
Adafruit_NeoPixel strip = Adafruit_NeoPixel(144, LED, NEO_GRB + NEO_KHZ800);

int vibrationMotor = 0;
unsigned long prevMillisTime;
int vibrationIndex = 1;
int vibrationTempo = 4000;

int ledGreen = A0;
int ledRed = A4;

int pressureSensor1 = A1; //allTiltSwitchesTopArm //grey
int pressureSensor2 = A2; //allTiltSwitchesMiddleArm // side of hand - orange
int pressureSensor3 = A3; //allTiltSwitchesHand //hand palm - blue

int pressureSensor_value1 = 0;
int pressureSensor_value2 = 0;
int pressureSensor_value3 = 0;

int tiltSwitch1 = 2; //allTiltSwitchesTopArm //purple
int tiltSwitch2 = 3; // allTiltSwitchesTopArm // blue
int tiltSwitch3 = 5; //allTiltSwitchesTopArm // green

int tiltSwitch4 = 1; //allTiltSwitchesMiddleArm //yellow
int tiltSwitch5 = 9; //allTiltSwitchesMiddleArm //green
int tiltSwitch6 = 10; //allTiltSwitchesMiddleArm //blue

int tiltSwitch7 = 11; // allTiltSwitchesHand //green
int tiltSwitch8 = 12; //allTiltSwitchesHand //yellow
int tiltSwitch9 = 13; //allTiltSwitchesHand //orange

int tiltSwitch1_state; 
int tiltSwitch2_state; 
int tiltSwitch3_state;
int tiltSwitch4_state;
int tiltSwitch5_state;
int tiltSwitch6_state;
int tiltSwitch7_state;
int tiltSwitch8_state;
int tiltSwitch9_state;

//check state of hand gesture - tilt switches
int allTiltSwitchesTopArm = 0; 
int allTiltSwitchesMiddleArm = 0; 
int allTiltSwitchesHand = 0; 

//tracker to check for stable connection btw arduino and phone
int trackerFromApp = 0;
int x =0;

void setup() {
  // initialize serial communications at 57600 bps:
  Serial.begin(57600);

  // Set your BLE Shield name here, max. length 10
  ble_set_name("Device 2");

  // Init. and start BLE library.
  ble_begin();

  pinMode(vibrationMotor, OUTPUT);  
  pinMode(tiltSwitch1, INPUT);
  pinMode(tiltSwitch2, INPUT);
  pinMode(tiltSwitch3, INPUT);
  pinMode(tiltSwitch4, INPUT);
  pinMode(tiltSwitch5, INPUT);
  pinMode(tiltSwitch6, INPUT);
  pinMode(tiltSwitch7, INPUT);
  pinMode(tiltSwitch8, INPUT);
  pinMode(tiltSwitch9, INPUT);

  pinMode(ledGreen, OUTPUT);  
  pinMode(ledRed, OUTPUT);  

  //  strip.begin();
  //  strip.show(); // Initialize all pixels to 'off'

  digitalWrite(ledRed, HIGH);
  digitalWrite(ledGreen, LOW);
}


void loop() {
  pressureSensor_value1 = analogRead(pressureSensor1); 
  pressureSensor_value2 = analogRead(pressureSensor2); 
  pressureSensor_value3 = analogRead(pressureSensor3);

  //process data from sensor, separate sensors into body parts
  processSensorData();

  //inititate bluetooth connection btw arduino and phone
  bluetooth_connection();

  //initiate vibration motor on arduino
  //vibrationRhythm();
  //    digitalWrite(vibrationMotor, HIGH);

  //initiate led strip
  //  ledStrip(); //ledstrip function is screwing up vibrationrhythm function

    //console log all sensor data
//  consoleLog();

  //check whether reset is triggered
  //  checkReset();
}













