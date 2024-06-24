//<export {Key,PushDrawAll,tune_bc,get_note,fill_heim};
// configuration des claviers
const rows =[];

rows[4] = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];

//tab go to bar address ??
//'Tab', 'KeyQ', droped 
rows[3] = [ 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter' ];

//enter is common with row3
//'CapsLock', dropped                                                                                              , 'Enter' dropped  
rows[2] = [ 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash'];
//'ShiftLeft', dropped
rows[1]= [ 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'];

//for some bluetooth Logitech keyboard
const KEY_NEAR_SHIFT_LEFT = 'Backquote';

// chromatique
const PushTierceMineure = ["C1", "Eb1", "F#1", "A1", "C2", "Eb2", "F#2", "A2", "C3", "Eb3", "F#3", "A3"]; 

// stradella 
const Stradella = {
            notes: ["Gb4", "Db4", "Ab4", "Eb4", "Bb4", "F4", "C4", "G4", "D4", "A4", "E4", "B4"] ,
            fill: function (transpose,channel) {
            let push=[];
            let draw=[];
            push[1] =  this.notes.map(note_string => note2midi(note_string) + transpose ); 
            draw[1] =  push[1]; // poussé tiré mêmes notes
            push[2] = this.notes.map(note_string => note2midi(note_string) + transpose - 1 ); 
            draw[2] = push[2];
            push[3] = this.notes.map(note_string => note2midi(note_string) + transpose - 2); 
            draw[3] = push[3]; 
            for (let rowNumber = 1;rowNumber < 4;rowNumber++) {
            rows[rowNumber].forEach(function(keyp,i) {
             // ici on ramène l'octave à zéro et on ajoute 36 pour arriver à l'octave 3
             // en effet toutes les notes restent sur la même octave basée sur le do0
            PushDrawAll[keyp] = new Key(push[rowNumber][i] % 12 + 36,
                                        draw[rowNumber][i] % 12 + 36,channel);});
            }
            }
}
 
// init tablature with Maugein GC+Alt
let Tablature = {
    row1Push: ["B0", "D1", "G1", "B1", "D2", "G2", "B2", "D3", "G3", "B3", "D4", "G4"],
    row1Draw: ["E1", "Gb1", "A1", "C2", "E2", "Gb2", "A2", "C3", "E3", "Gb3", "A3", "C4"],

    row2Push: ["E1", "G1", "C2", "E2", "G2", "C3", "E3", "G3", "C4", "E4", "G4", "C5"],
    row2Draw: ["G1", "B1", "D2", "F2", "A2", "B2", "D3", "F3", "A3", "B3", "D4", "G4"],

    row3Push: ["G#1", "Bb1", "Eb2", "G#2", "Bb2", "Eb3", "G#3", "Bb3", "Eb4", "G#4", "Bb4", "Eb5"],
    row3Draw: ["Bb1", "C#2", "G2", "G#2", "Bb2", "C#3", "G3", "G#3", "Bb3", "C#4", "G4", "G#4"],


    fill: function (transpose, channel) {
        let push = [];
        let draw = [];
        push[1] = this.row1Push.map(note_string => note2midi(note_string) + transpose);
        draw[1] = this.row1Draw.map(note_string => note2midi(note_string) + transpose);
        push[2] = this.row2Push.map(note_string => note2midi(note_string) + transpose);
        draw[2] = this.row2Draw.map(note_string => note2midi(note_string) + transpose);
        push[3] = this.row3Push.map(note_string => note2midi(note_string) + transpose);
        draw[3] = this.row3Draw.map(note_string => note2midi(note_string) + transpose);
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            rows[rowNumber].forEach(function (keyp, i) {
                PushDrawAll[keyp] = new Key(push[rowNumber][i],
                    draw[rowNumber][i], channel);
            });
        }
    }
}

let maugein = Object.create(Tablature);

// Ctrl-Alt-Suppr
let maloMorvan =  Object.create(Tablature);
    maloMorvan.row1Push = ["D4", "F#4","G4","B4", "D5","F#5","G5","B5", "D6","F#6","G6","B6"] ;
    maloMorvan.row1Draw= ["C4","E4","F#4","A4",  "C5","E5","F#5","A5", "C6","E6","F#6","A6"] ;

    maloMorvan.row2Push= ["F4", "A4", "C5", "E5", "F5", "A5", "C6", "E6",  "F6", "A6", "C7", "E7"] ;
    maloMorvan.row2Draw= ["F4","G4","B4", "D5",  "F5","G5","B5", "D6",  "F6","G6","B6","D7"] ;

    maloMorvan.row3Push= ["G#4","Bb4","C#5","Eb5", "G#5","Bb5","C#6","Eb6", "G#6","Bb6","C#7","Eb7"];
    maloMorvan.row3Draw= ["G#4","Bb4","C#5","Eb5", "G#5","Bb5","C#6","Eb6", "G#6","Bb6","C#7","Eb7"];
   
   

// here a diatonic row for C
// allowing only 12 notes per row simplify the program
const pushC = ["C1", "E1", "G1", "C2", "E2", "G2", "C3", "E3", "G3", "C4", "E4", "G4"]; //Do Mi Sol
const drawC = ["F1", "A1", "B1", "D2", "F2", "A2", "B2", "D3", "F3", "A3", "B3", "D4"]; //Fa La Si Ré


let heim1 = Object.create(Tablature);
//row1 is standard G
heim1.row2Push = [ "E1", "A1", "C2", "E2", "A2", "C3", "E3", "A3", "C4", "E4", "A4", "C5"];
heim1.row2Draw = ["G1", "B1", "D2", "F2", "G2", "B2", "D3", "F3", "G3", "B3", "D4", "F4"];

heim1.row3Push = [ "F1",  "Ab1", "Eb2", "F2",  "Ab2", "Eb3", "F3",  "Ab3", "Eb4", "F4",  "Ab4","Eb5"];
heim1.row3Draw = [ "Bb1", "Db2", "Eb2", "Ab2", "Bb2", "Db3", "Eb3", "Ab3", "Bb3", "Db4", "Eb4","Ab4"];



/********* heim *****/
let heim = Object.create(Tablature);
//row1 is standard G
heim.row2Push= ["C1", "E1", "G1", "C2", "E2", "G2", "C3", "E3", "G3", "C4", "E4", "G4"];
heim.row2Draw = ["F1","G1", "B1", "D2", "F2", "A2", "B2", "D3", "F3", "A3", "B3", "D4"];

heim.row3Push = [ "Eb1",  "G#1", "A1", "Eb2", "G#2",  "A2", "Eb3",  "G#3",  "A3", "Eb4", "G#4","A4"];
heim.row3Draw = [ "G#1", "Bb1", "C#2", "G2", "G#2",  "Bb2",  "Db3",  "G3",  "Ab3", "Bb3", "Db4","G4"];


/** milleret pignol C/F  */
let milleretPignol = Object.create(Tablature);
milleretPignol.row1Push=  ["C4", "F#4", "G3", "C4", "E4", "G4", "C5", "E5", "G5", "C6", "E6", "G6"];
milleretPignol.row1Draw=  ["C4", "Bb3", "B3", "D4", "F4", "A4", "B4", "D5", "F5", "A5", "B5", "D6"];

milleretPignol.row2Push=  ["A3", "Eb5", "D4", "F4", "A4",  "D5",  "F5", "A5", "D6",  "F6",  "A6", "C7" ];
milleretPignol.row2Draw = ["C4", "C#4", "E4", "G4", "Bb4", "C#5", "E5", "G5", "Bb5", "C#6", "E6", "G#6"];

milleretPignol.row3Push = [  "Bb3", "B3", "G#4", "Bb4", "B4",  "G#5", "Bb5", "B5", "G#6", "Bb6", "B6", "C7"];
milleretPignol.row3Draw = [  "Eb4", "F#4", "G#4", "C5", "Eb5", "F#5", "G#5", "C6", "Eb6", "F#6", "F6", "C7"];

// bc + c reversal
        function fill_irish_BC_reversal(transpose,channel) {
            let push=[];
            let draw=[];
            push[1] =  pushC.map(note_string => note2midi(note_string) + transpose ); 
            draw[1] =  drawC.map(note_string => note2midi(note_string) + transpose );
            push[2] = pushC.map(note_string => note2midi(note_string) + transpose + 1 ); 
            draw[2] = drawC.map(note_string => note2midi(note_string) + transpose + 1 );
            push[3] = drawC.map(note_string => note2midi(note_string) + transpose + 1 ); 
            draw[3] = pushC.map(note_string => note2midi(note_string) + transpose + 1); 
            for (let rowNumber = 1;rowNumber < 4;rowNumber++) {
            rows[rowNumber].forEach(function(keyp,i) {
            PushDrawAll[keyp] = new Key(push[rowNumber][i],draw[rowNumber][i],channel);});
            }
            }

            function fill_cgriff(transpose,channel) {
                let push=[];
                let draw=[];
                push[1] =  PushTierceMineure.map(note_string => note2midi(note_string) + transpose ); 
                draw[1] =  push[1];
                push[2] = PushTierceMineure.map(note_string => note2midi(note_string) + transpose + 1 ); 
                draw[2] = push[2];
                push[3] = PushTierceMineure.map(note_string => note2midi(note_string) + transpose + 2 ); 
                draw[3] = push[3];
                for (let rowNumber = 1;rowNumber < 4;rowNumber++) {
                rows[rowNumber].forEach(function(keyp,i) {
                PushDrawAll[keyp] = new Key(push[rowNumber][i],draw[rowNumber][i],channel);});
                }
                }
// array for push pull it is here where the world change
/* ça donne ça
{IntlBackslash: Key, KeyZ: Key, KeyX: Key, KeyC: Key, KeyV: Key, …} =>
Backslash
: 
Key {active: false, push: 96, draw: 89, channel: 0}
BracketLeft
: 
Key {active: false, push: 89, draw: 85, channel: 0}
*/
var PushDrawAll = {}; 

    
const row0 = ['ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ControlRight'];

const arrow = ['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'PageUp', 'PageDown', 'Home', 'End'];

const functs = ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6']; //F7 and upper are useless


//                     0     1    2    3     4    5    6     7     8    9    10   11
const Midi2Note   =  ["C", "C#", "D" ,"Eb", "E" ,"F", "F#", "G", "G#", "A" ,"Bb", "B"];

//sharp and flat are allowed
const NoteMidi = {
    "C" : 0,
    "C#" : 1,
    "Db" : 1,
    "D" : 2,
    "D#" : 3,
    "Eb" : 3,      
    "E" : 4,
    "F" : 5,
    "F#" : 6,
    "Gb" : 6,
    "G" : 7,
    "G#" : 8,
    "Ab" : 8,
    "A" : 9,
    "A#" : 10,
    "Bb" : 10,
    "B" : 11
};

/* Key is the proto of Keys
var Key = { push : {note : -1, active: false},
	    draw : {note : -1, active: false},
	    channel : 0, //  mean 1
	    pushed : function() {return this.push.active;},
	    drawed : function() {return this.draw.active;}
	  };
*/

function Key(pushNote,drawNote,chan) {
    this.active = false;
    this.push= pushNote;
    this.draw= drawNote;
    this.channel=chan;
}

    
// fill the push and draw arrays with midi note number C = 0, C# =1 etc ... G9=127
// fill_push_draw("row1",1,1,0) => row1 = C# row
// row1 become C#  and shifted by one because I don't play left shift
function fill_push_draw(rowNumber,transpose,shifted,channel) {
    let push = pushC.map(note_string => note2midi(note_string) + transpose ); // C to C# if transpose is 1
    let draw = drawC.map(note_string => note2midi(note_string) + transpose ); // F to F# if transpose is 1
    for (let i = 0; i < shifted ;i++) { push.unshift(undefined);}//put undefined value for not play the key n shifted
    for (let i = 0; i < shifted ;i++) { draw.unshift(undefined);}
    rows[rowNumber].forEach(function(keyp,i) {
	PushDrawAll[keyp] = new Key(push[i],draw[i],channel);});
}

//  note2midi("C#4") => 49
function note2midi(note_in) {
    const note = note_in.trim();// en cas d'erreur d'entrée de note
    let taille = note.length;
    let name = note.substring(0,taille - 1);
    let octave = note.substring(taille - 1,taille);
    return NoteMidi[name] + octave * 12;
}

// getNote(49) => "C#4"
function get_note(midiNumber) {
    let rootNote = Midi2Note[midiNumber % 12];
    let octave = Math.floor(midiNumber / 12);
    return rootNote + octave;
};

// transpose -1 = B/C, 0=C/C# , 1= C#/D  and so one 
function tune_bc(transpose) {
    fill_push_draw(1,transpose,    0,0); //channel 1 for row1
    fill_push_draw(2,transpose + 1,0,0); //channel 1 for row2
    fill_push_draw(3,transpose + 2,0,0); //channel 1 for row3
}
