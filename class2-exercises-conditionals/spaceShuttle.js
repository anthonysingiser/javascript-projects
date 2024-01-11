/* answers: 

    2. engines are off

    4. Yes

*/

const engineIndicatorLight = !'red blinking';
const spaceSuitsOn = true;
const shuttleCabinReady = true;
const crewStatus = spaceSuitsOn && shuttleCabinReady;
const computerStatusCode = 200;
const shuttleSpeed = 15000;
const fuelLevel = 18000;
const engineTemperature = 2500;
const optimumEngineTemp = engineTemperature <= 2500;
const commandOverride = true;

function crewReadyCheck() {
    if (crewStatus === true) {
        console.log("Crew Ready");
    } else {
        console.log("Crew Not Ready");
    }
}

function computerCheck() {
    if (computerStatusCode === 200) {
        console.log("Please Stand By. Computer is rebooting.");
    } else if (computerStatusCode === 400) {
        console.log("Success! Computer online.");
    } else {
        console.log("Alert: Computer offline!")
    }
}

function shuttleSpeedCheck() {
    if (shuttleSpeed > 17500) {
        console.log("ALERT: Escape velocity reached!")
    } else if (shuttleSpeed < 8000) {
        console.log("ALERT: Cannot maintain orbit!")
    } else {
        console.log("Stable speed")
    }
}


function engineTempAndFuelCheck() {
    if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
        console.log('ENGINE FAILURE IMMINENT!')
    } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
        console.log('Check fuel level. Engines running hot.')
    } else if (fuelLevel > 20000 && optimumEngineTemp) {
        console.log('Full tank. Engine is good.')
    } else if (fuelLevel > 10000 && optimumEngineTemp) {
        console.log('Fuel level above 50%. Engines good.')
    } else if (fuelLevel > 5000 && optimumEngineTemp) {
        console.log('Fuel level above 25%. Engines good.')
    } else {
        console.log('Fuel and engine status pending')
    }
}

function launchCheck (){
    if(fuelLevel > 20000 && engineIndicatorLight || commandOverride){
        console.log('Cleared to launch!')
    } else {
        console.log('Launch scrubbed!')
    }
}


crewReadyCheck();
computerCheck();
shuttleSpeedCheck();
engineTempAndFuelCheck();
launchCheck();