# supergestures
A participatory and performative project which explores the collective decision making among young people in Manchester through their bodily interaction with the city using body gestures.

The app was developed with the latest up to date cordova version 6.3.1. It supports both android and iOS version: 
* Android version >6.0.1 
* iOS >9.1

## Note

This app is developed using Arduino Uno connected to Ble mini and also on Blend Micro board 

If you are using Blend Micro board, please comment out:
* line 201 and line 357 in scan_for_device.js
* line 726-728 in global.js

## Deploying the app on an android phone locally using Terminal

* If you have freshly cloned the project from github, remember to use `npm install -g cordova` to download the latest cordova version before running the app. Go to https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html to download the various dependencies in order to set up your SDK environment to deploy Cordova apps for Android devices. 
* Open a new terminal window.
* Redirect to the source code directory
* Check whether any dependencies are missing
```bash
$ cordova build android
```
* if the build is successful. Connect your android phone to your computer, make sure the following setting on your phone is enabled:
* In `Settings` -> `Security` -> enable `Unknown sources`
* In `Settings` -> `Developer options` -> enable `USB debugging`
* Run the app via Terminal onto your mobile phone
```bash
$ cordova run android
```
## Creating apk file
* If you have make changes to the source code and would like to build a new apk file
* Open a new terminal window.
* Redirect to the source code directory
* Build a new apk file
```bash
$ cordova build --release
```
* The apk file can be found in `platforms` -> `android` -> `build` -> `outputs` -> `apk` -> `android-release-unsigned.apk`
