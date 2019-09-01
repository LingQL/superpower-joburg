var playingAudio = false;
var media;

function audioFileStream() {
    console.log("streaming audio!");
    // play selected audio content
    if(playingAudio == false){
        var num = Math.floor((Math.random() * 40) + 1); // a total of 40 audio files
        var audio_src = "audio/"+num+".m4a"; //get a random audio file

        var mp3URL = getMediaURL(audio_src);
        var media = new Media(mp3URL, null, mediaError);
        media.setVolume(1.0); //full volume
        media.play();
        playingAudio = true; // audio file is playing


        // get current position of audio 
        var mediaTimer = setInterval(function () {
            // get media position
            media.getCurrentPosition(
                // success callback
                function (position) {
                    if(position < 0){
                        clearInterval(mediaTimer);
                        playingAudio = false; //audio file has stopped
                    }
                },
                // error callback
                function (e) {
                    console.log("Error getting pos=" + e);
                }
            );
        }, 1000);

    }
}

//something wrong here!
function getMediaURL(audio_src) {
    // if(device.platform.toLowerCase() === "android") 
    return "/android_asset/www/" + audio_src;
    // return audio_src;
}

function mediaError(e) {
    if(e.code !== 0){
        console.log("media error=" + e.code);
    }
}
