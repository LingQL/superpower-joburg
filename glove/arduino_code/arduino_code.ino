#include <SPI.h>
#include <boards.h>
#include <RBL_nRF8001.h>

const int tiltSwitch1 = 3;     // the number of the pushbutton pin left of hand  (black wire)
const int tiltSwitch2 = 5;     // the number of the pushbutton pin one on middle finger (brown wire)
const int tiltSwitch3 = 8;     // the number of the pushbutton pin right of hand (purple wire) 
const int tiltSwitch4 = 2;     // the number of the pushbutton pin on wrist
const int tiltSwitch5 = 1;     // the number of the pushbutton pin on arm

//1 and 3 on sides of hand

int redLed = 9; // brown wire
int greenLed = 11; // green wire 
int yellowLed = 10; // orange

int vibrationMotor = 0;
unsigned long prevMillisTime;
int vibrationIndex = 1;
int vibrationTempo = 4000;

int tiltState1 = 0;         // variable for reading the pushbutton status
int tiltState2 = 0;         // variable for reading the pushbutton status
int tiltState3 = 0;         // variable for reading the pushbutton status
int tiltState4 = 0;         // variable for reading the pushbutton status
int tiltState5 = 0;         // variable for reading the pushbutton status
int sensorValue1 = 0;
int sensorValue2 = 0;
int sensorValue3 = 0;

int digitalPin12 = 12;
int trackerFromApp = 0;
int x =0;
//use to initiate sensing btw phone and device
const int analogPin4 = A4; 

//check state of hand gesture
int allTiltSwitches = 0; 
int allPressureSwitches = 0; 

// the setup routine runs once when you press reset:
void setup() {

  // Set your BLE Shield name here, max. length 10
  ble_set_name("Glove 3");

  // Init. and start BLE library.
  ble_begin();

  // initialize serial communication at 9600 bits per second:
  Serial.begin(57600);
  pinMode(tiltSwitch1, INPUT);     
  pinMode(tiltSwitch2, INPUT);     
  pinMode(tiltSwitch3, INPUT); 
  pinMode(tiltSwitch4, INPUT);     
  pinMode(tiltSwitch4, INPUT);   

  pinMode(redLed, OUTPUT);  
  pinMode(greenLed, OUTPUT);  
  pinMode(yellowLed, OUTPUT);  

  pinMode(vibrationMotor, OUTPUT); 

  pinMode(digitalPin12, INPUT);
  // Default to internally pull high, change it if you need
  digitalWrite(digitalPin12, HIGH);

}

// the loop routine runs over and over again forever:
void loop() {

  readSensor();

  consoleLog();

  //vibrationRhythm();

  bluetooth();
}

void tracker(){

  //this part of tracking function is to track whether when device gets disconnected, 
  //whether phone still think its receiving something from device
  int connectionTracker= 1;
  Serial.println(connectionTracker);
  uint16_t trackerState = connectionTracker;
  ble_write(0x0D);  
  ble_write(trackerState >> 8); 
  ble_write(trackerState); 
};


void vibrationRhythm(){

  long vibrationArray[] = {
    50, 100, 50, vibrationTempo                                                                                                         };

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












































































