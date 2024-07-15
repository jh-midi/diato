//import {  PushDrawAll, Key, tune_bc,get_note ,fill_heim} from "./keys.js";
// choisir le périphérique midi qui va bien ici : 'loopMIDI Port'

var midi = null;  // global MIDIAccess object
let outputs = null;
let output = null;
var VELOCITY = 100;
var TRANSPOSE = 0;
var TUNE_REF=36; // Do3 C3 midi
var PUSH=false;
const PRESSED_COLOR = 'coral';
const RELEASED_COLOR='black';

//object Key = {active: false, push: 96, draw: 89, channel: 0}
// KeyA : Key {active: false, push: 52, draw: 55, channel: 0}
// don't catch error
Key.prototype.play = function() {
    this.active=true;
    if (PUSH) {
	output.send([0x90 + this.channel, this.push + TRANSPOSE , VELOCITY]);
	return get_note(this.push + TRANSPOSE);
    }
    else  {
	output.send([0x90 + this.channel, this.draw + TRANSPOSE , VELOCITY]);
	return get_note(this.draw + TRANSPOSE);
    } 
};

Key.prototype.mute = function(evCode) {
    this.active=false;
    if (PUSH) {
	output.send([0x80 + this.channel, this.push + TRANSPOSE , 0]);
    }
    else  {
	output.send([0x80 + this.channel, this.draw + TRANSPOSE , 0]);

    } 
};

						 

function note_off() {
    Object.entries(PushDrawAll).forEach( function(val) {
	val[1].active=false;
	output.send([0x80 + val[1].channel,val[1].push + TRANSPOSE , 0]);
	output.send([0x80 + val[1].channel,val[1].draw + TRANSPOSE , 0]);
	change_color(val[0] ,false);
	change_color(val[0] ,false);}
				       );
}



//push draw
function note_change() {
    Object.entries(PushDrawAll).forEach( function(val) {
	let keyName=val[0];
	let key_push = 	 document.getElementById(keyName + "_push");
	let key_draw = 	 document.getElementById(keyName + "_draw");
	let key = val[1];
	let noteOut="";
	if (key.active) {
	    switch (PUSH) {
	    case true : { output.send([0x80 + key.channel,key.draw + TRANSPOSE , 0]);
			  output.send([0x90 + key.channel,key.push + TRANSPOSE , VELOCITY]);
			  key_draw.style.color=RELEASED_COLOR;
			  key_push.style.color=PRESSED_COLOR;
			 
			}
	       break;
	   case false :	{
	       output.send([0x80 + key.channel,key.push + TRANSPOSE , 0]);
	       output.send([0x90 + key.channel,key.draw + TRANSPOSE , VELOCITY]);
	       key_push.style.color=RELEASED_COLOR;
	       key_draw.style.color=PRESSED_COLOR;
	      
	   }
	       break;
	   }
       }
      });
}

// périphériques midi
function showDevices(outputs) {
    const midi_div = document.getElementById('select_midi');
	if (outputs.size > 0) {
		for (const inout of outputs.values()) {
            const option = document.createElement("option")
            option.innerText=inout.name;
            midi_div.appendChild(option) //+ "| type : " + inout.type);
           	}
		}
    }

function choixMidiOut(element) {
    var idx=element.selectedIndex;
    var content=element.options[idx].innerText;
    output = getDeviceByName(content,outputs);
    
}

// if device don't exist => fail
function getDeviceByName(deviceName, InOrOut) {
	if (InOrOut.size > 0) {
		for (const inout of InOrOut.values()) {
			console.log("|device name|" + inout.name + "| type : " + inout.type);
            
			if (inout.name == deviceName) {
               	return inout;
			}
		}
	} // error of naming device
        const midi_div = document.getElementById('midi');
        midi_div.innerText= "the device " + deviceName + " is not active";
    }


function get_root_note(nomNote) {
    let noteName = nomNote.replace(/\d+/,"");
    noteName= noteName.replace("#","s"); //replace # for s (sharp) because # is not good on css
    return noteName.toLowerCase();
}

// button with push draw attached label
// dessine les boutons avec semi-bouton id class etc... nécessaire pour le css
function create_button(keyName,pushMidi,drawMidi,row) {
    let pushLabel = get_note(pushMidi);
    let pushRoot= get_root_note(pushLabel);
    let drawLabel = get_note(drawMidi);
    let drawRoot=  get_root_note(drawLabel);
    let button = document.createElement("div"); //<div class="button">
    button.className="button";
    let push = document.createElement("div"); // div class="semi-button push">C</div>
    push.className="semi-button push" + " " + pushRoot ;
    push.id= keyName + '_push'; // 'KeyZ_push'
    let draw = document.createElement("div"); // div class="semi-button draw">E</div>
    draw.className="semi-button draw"  + " " + drawRoot;
    draw.id= keyName + '_draw'; // 'ShiftRight_draw'
    push.textContent=pushLabel;
    draw.textContent=drawLabel;
    button.appendChild(push);
    button.appendChild(draw);
    row.appendChild(button);
    
}

// 12 buttons per rows to fill
// il y a 12 touches sur le clavier PC par rangée à remplir
function css_notes() {
    let row1 = document.querySelector("#row1");
    let row2 = document.querySelector("#row2");
    let row3 = document.querySelector("#row3");
    row1.textContent=''; //remove childs from previous configuration
    row2.textContent='';
    row3.textContent='';
    Object.entries(PushDrawAll).forEach( function(val,i) {
	let keyName=val[0];
	let key = val[1];
	if (i > 23) {create_button(keyName,key.push ,key.draw,row3);}
	else if (i > 11 && i < 24) {create_button(keyName,key.push ,key.draw,row2);}
	else if (i < 12) {create_button(keyName,key.push,key.draw,row1);}
    });
	
}

// fill the main keyboard configuration
function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  
   outputs = midiAccess.outputs;
   showDevices(outputs);
   //output = getDeviceByName('Maschine MK3 Ctrl MIDI',outputs);
    // output = getDeviceByName('Lemur Bus IAC 3',outputs);
    //output = getDeviceByName('loopMIDI Port',outputs);
    let mid_out = document.getElementById('select_midi')
    output = getDeviceByName(mid_out.options[0].innerText,outputs);
    console.log("output name " + output.name)
    heim1.fill(36,0);
    tuning = "heim1";
    css_notes();
    note_off();
}  

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
  alert( "Failed to get MIDI access - " + msg );
 
}

 window.onload = function() {
   if (navigator.requestMIDIAccess)  {
     navigator.requestMIDIAccess()
     .then( onMIDISuccess, onMIDIFailure );
   }
     else  
     alert("please Use Chromium based browser : Chrome, Brave, Edge ...")
};


//button pressed true => play
function change_color(keyName,pressed) {
    let buttonPushOrDraw = PUSH ? '_push' : '_draw';
    let gateId = keyName + buttonPushOrDraw ;
    let gate = document.getElementById(gateId);
   // console.log(gate);
    if (pressed) { gate.style.color=PRESSED_COLOR ;}
    else { gate.style.color=RELEASED_COLOR; }
    
    
}


//function key tune irish accordion
function tune_fn_key(transpose) {
    tune_bc(transpose + TUNE_REF);//BC-CC#-C#D-DD#
    css_notes();
};

// this function exist for allowing semi-tone transposing facility with arrowleft and arrowright

function fill_tuning(name){
    switch(name) {
        case 'Irish BC': tune_fn_key(-1);document.title="Irish BC";
        break;
        case "Irlandais F#G": tune_fn_key(-6);document.title="Irlandais F#G";
        break;
        case "Irish C#D": tune_fn_key(1);document.title="Irish C#D";
        break;
        case "GC-alt Maugein": {maugein.fill(TUNE_REF,0), css_notes();document.title="GC-alt Maugein"};//
        break;
        case "Heim standard": {heim.fill(TUNE_REF,0), css_notes();document.title="Heim standard"};//Heim normal
        break;
        case "Milleret Pignol Do/Fa": {milleretPignol.fill(TUNE_REF - 36,0), css_notes();document.title="Milleret Pignol Do/Fa";};//saphir gaillard
        break;
        case "Maugein Swing" : {maugein_swing.fill(TUNE_REF,0), css_notes();document.title="Maugein Swing"};
        break;
        case "C griff chromatique français" : {fill_cgriff(TUNE_REF,0), css_notes();document.title="C griff chromatique français"}
        break;
        case "Stradella bass 3 rows": {Stradella.fill(TUNE_REF - 28,0), css_notes();document.title="Stradella bass 3 rows"} 
        break;
        case "Heim1": {heim1.fill(TUNE_REF,0), css_notes();document.title="Heim1"} 
        break;
    }
}

window.addEventListener("keydown", function(event) {
    if (event.code === 'ShiftLeft' )  { PUSH=true;note_change();}
    /* key at right of left shift is not regular on all keyboards */
    let evCode = event.code == 'Backquote' ?  'IntlBackslash' : event.code  ;
    let key = PushDrawAll[evCode];
    if (key !== undefined && event.repeat===false) {
	key.play();
	change_color( evCode,true); 
	
    } else switch(event.code) {
   case 'Escape' : output.send([0xB0,86,127]);//stop sequencer
	break;
	case 'AltLeft' : output.send([0xB0,85,127]); //start sequencer
	break;
	case 'Backspace' : output.send([0xB0,87,127]); //step back
	break;
	case 'Digit1': fill_tuning("Irish BC");
	break;
	case 'Digit2': fill_tuning("Irlandais F#G");
	break;
	case 'Digit3': fill_tuning("Irish C#D");
	break;
	case 'Digit4': fill_tuning("GC-alt Maugein");//
	break;
    case 'Digit5': fill_tuning("Heim standard");//Heim normal
	break;
    case 'Digit6': fill_tuning("Milleret Pignol Do/Fa");//saphir gaillard
	break;
    case 'Digit7': fill_tuning("Maugein Swing");
    break;
    case 'Digit8': fill_tuning("C griff chromatique français");
    break;
    case 'Digit9': fill_tuning("Stradella bass 3 rows");
    break;
    case 'Digit0': fill_tuning("Heim1"); 
    break;

    case 'ArrowUp': {TUNE_REF = TUNE_REF + 12; fill_tuning(document.title); };
	break;
	case 'ArrowDown': {TUNE_REF = TUNE_REF - 12; fill_tuning(document.title); };
	break;
// allow semi-tone tuning 
    case 'ArrowLeft': { --TUNE_REF ; fill_tuning(document.title); };
	break;
	case 'ArrowRight': { ++TUNE_REF; fill_tuning(document.title);};
	break;    
    case 'Home' : {TUNE_REF = 36; ; fill_tuning(document.title);};
    break;
   
    case 'Space' : note_off();
    break;
    }
}, true);


window.addEventListener("keyup", function(event) {
    if (event.code === 'ShiftLeft' )  { PUSH=false;note_change();}
    let evCode = event.code == 'Backquote' ?  'IntlBackslash' : event.code  ;
    let key = PushDrawAll[evCode];
     if (key !== undefined) {
	key.mute();
	change_color(evCode,false); 
    }
    }, true);
