

document.getElementById("cImg").src = "img/crosshairorange.png";

var ui = {
	
	button1: document.getElementById('button1'),


    timer: document.getElementById('timer'),
    robotConnection: document.getElementById('robotConnection'),
	

    Minimap: {

        container: document.getElementById('fieldDisplay'),
        indicator: document.getElementById('robotImage'),
        indicatorElement1: document.getElementById('polyOne'),
        indicatorElement2: document.getElementById('polyOne'),
        Value: 0,
        visualValue: 0,
        resetValue: 0
    },
	
	autoSelect: {

    autoSelect: document.getElementById('button-group1'),
    buttonL: document.getElementById('buttonL'),
    buttonM: document.getElementById('buttonM'),
    buttonR: document.getElementById('buttonR'),


},
	


};


	

NetworkTables.addKeyListener("/SmartDashboard/teleOpInit",initTeleCam,true);

NetworkTables.addGlobalListener(onValueChanged, true);

NetworkTables.addRobotConnectionListener(onRobotConnection, true);

NetworkTables.addKeyListener("/limelight/tv",targetFound,true);

NetworkTables.addKeyListener("/limelight/ty",targetOffset,true);

var targFlag = false ;

function targetOffset () {
	
	var teeX = NetworkTables.getValue("/limelight/tx", -99)
	var teeY = NetworkTables.getValue("/limelight/ty", -99)
	var teeX0 = NetworkTables.getValue("/limelight/tx0", -99)
	var teeY0 = NetworkTables.getValue("/limelight/ty0", -99)
	var teeHor = NetworkTables.getValue("/limelight/thor", -99)
	var teeVert = NetworkTables.getValue("/limelight/tvert", -99)
	
	
	document.getElementById('tx').innerHTML ="tx: " +teeX;
	document.getElementById('ty').innerHTML ="ty: " +teeY;
	document.getElementById('thor').innerHTML ="thor: " +teeHor;
	document.getElementById('tvert').innerHTML ="tvert: " +teeVert;
	
	
	var targInRange = false;
		
	if(Math.abs(teeX) <= 3.5 && Math.abs(teeY) <= 3.5  && (teeX && teeY) != 0 || (Math.abs(NetworkTables.getValue("/limelight/thor",-1)) > 40 && Math.abs(NetworkTables.getValue("/limelight/tvert",-1)) > 45 && Math.abs(teeX) <= 10.5 && Math.abs(teeY) <= 10.5  && (teeX && teeY) != 0 ) ) {
		targInRange = true; //lol
	}
		 
	if(targInRange){
		
		if(!targFlag){
				
			document.getElementById("cImg").src = "img/crosshairred.png";
			targFlag = true;
		}
	
	} else if(!targInRange && targFlag) {
			
		document.getElementById("cImg").src = "img/crosshairorange.png";
		targFlag = false;
		
	}
	
	
}

function targetFound (key, value, isNew){
	
		 
     if(value === 1 && NetworkTables.getValue("/SmartDashboard/dist", 5) >= 2.5 {
		
       document.getElementById('target').innerHTML = "Valid target acquired 👀";
	   document.getElementById('target').style.color = "#00d500";
	   
	   
    } else {

		
		document.getElementById('target').innerHTML = "No target 🌚";
		document.getElementById('target').style.color = "#d50000";//;
		}
    // do something with the values as they change
};

/**==============================================================

PSA! NEVER EVER USE THIS LINE OF CODE OUTSIDE OF A FUNCTION!

//NetworkTables.putValue("/limelight/stream", 2); //set on init

IT WILL BREAK THE NETWORKTABLE VALUE IN THE FIRMWARE ON THE LIMELIGHT!!!!!!!!!!!!!!!!!
IT WILL REQUIRE A RE-FLASH!!!!!

==================================================================**/


var toggle = true;

function initTeleCam (key, value, isNew){
	
	if(key.getValue === true)
		NetworkTables.putValue("/limelight/stream", 2);
	
	document.getElementById("buttonL").style.visibility='hidden';
	document.getElementById("buttonM").style.visibility='hidden';
	document.getElementById("buttonR").style.visibility='hidden';
	document.getElementById("autoHeader").style.visibility='hidden';
	
}

button1.addEventListener ("click", function() {
	



if(toggle === false){
	
	//NetworkTables.putValue("/limelight/ledMode", 0); //these were for testing
	NetworkTables.putValue("/limelight/stream", 0);	
	document.getElementById("camera").style.width = "1280px";
	document.getElementById("camera").style.left = "43px";
	document.getElementById("crosshair").style.left = "320px"; //actually 960px from the left but the div pos is relative
	toggle = true;
	mode0 = true;
	
	
	

} else{
	//NetworkTables.putValue("/limelight/ledMode", 2);	
	
	NetworkTables.putValue("/limelight/stream", 2);	 
	document.getElementById("camera").style.width = "640px";
	document.getElementById("camera").style.left = "362px";
	document.getElementById("crosshair").style.left = "-1px";
	toggle = false;
	
	
	
	
}

//alert(NetworkTables.getValue("/limelight/ledMode", -99));	



});

buttonL.addEventListener ("click", function() {
	
	NetworkTables.putValue("/SmartDashboard/autonomousPos", 'L');
	//alert(NetworkTables.getValue("/SmartDashboard/autonomousPos", 'N'));
	
	debug(NetworkTables.getValue("/SmartDashboard/autonomousPos", 'N'));
	
});

buttonM.addEventListener ("click", function() {
	
	NetworkTables.putValue("/SmartDashboard/autonomousPos", 'M');
	//alert(NetworkTables.getValue("/SmartDashboard/autonomousPos", 'N'));
	
	debug(NetworkTables.getValue("/SmartDashboard/autonomousPos", 'N'));
	
});

buttonR.addEventListener ("click", function() {
	
	NetworkTables.putValue("/SmartDashboard/autonomousPos", 'R');
	//alert(NetworkTables.getValue("/SmartDashboard/autonomousPos", 'N'));
	
	debug(NetworkTables.getValue("/SmartDashboard/autonomousPos", 'N'));
	
});

var LEDMode = true;

LEDToggle.addEventListener ("click", function() {
	
	if(LEDMode) {
		NetworkTables.putValue("/limelight/ledMode", 0);
		LEDMode = false;
	} else {
		NetworkTables.putValue("/limelight/ledMode", 1);
		LEDMode = true;
	//alert(NetworkTables.getValue("/SmartDashboard/autonomousPos", 'N'));
	}
});


//document.getElementById("Save").onclick

	//button1.onclick = function() {
	
//	NetworkTables.putValue("/limelight/stream", 2);
	

function onRobotConnection(connected) {
    var state = connected ?   'Robot connected' : 'Robot disconnected';
    console.log(state);
    ui.robotConnection.innerHTML = state;
}


  
		

		if(NetworkTables.isRobotConnected === true) {
			
			//	document.getElementById('target').innerHTML = 'No target';
				
		}

    function onValueChanged(key, value) {
        // Sometimes, NetworkTables will pass booleans as strings. This corrects for that.
        if (value === 'true') value = true;
        if (value === 'false') value = false;



        switch (key) {

            case '/SmartDashboard/Yaw':

                ui.Minimap.Value = value ;
                ui.Minimap.visualValue = Math.floor(ui.Minimap.Value - ui.Minimap.resetValue);
                if (ui.Minimap.visualValue < 0) { // Corrects for negative values
                    ui.Minimap.visualValue += 360;
                }
                ui.Minimap.indicator.style.transform = ('rotate(' + ui.Minimap.visualValue + 'deg)');

                break;

            case '/SmartDashboard/timeRunning':


                var s = 150;

                if (value === true) {

                    ui.timer.style.color = "#00d500";

                    var countdown = setInterval(function () {
                        s--; // Subtracts one second

                        var m = Math.floor(s / 60);

                        var visualS = (s % 60);


                        visualS = visualS < 10 ? '0' + visualS : visualS;

                        if (s < 0) {
                            // Stop countdown when timer reaches zero
                            clearTimeout(countdown);
                            return;
                        } else if (s <= 75 && s > 30) {

                            ui.timer.style.color = 'yellow';
                        } else if (s <= 30) {

                            ui.timer.style.color = 'red';

                        } 
                        ui.timer.innerHTML = m + ':' + visualS;
                    }, 1000);
                } else {
                    s = 150;
                }


                NetworkTables.setValue(key, false);

                break;
        }



    }


ui.Minimap.onclick = function () {

        ui.Minimap.offset = ui.Minimap.Value;

        onValueChanged('/SmartDashboard/drive/navX/yaw', ui.Minimap.Value);

};

function debug(string) {
	document.getElementById("debugFeed").innerHTML = string;
}




	



