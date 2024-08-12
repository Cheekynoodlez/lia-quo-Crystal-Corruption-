import { Track } from "https://deno.land/x/remapper@3.1.2/src/animation.ts";
import { NOTETYPE } from "https://deno.land/x/remapper@3.1.2/src/constants.ts";
import { animateEnvTrack } from "https://deno.land/x/remapper@3.1.2/src/environment.ts";
import { eventsBetween, RMLog } from "https://deno.land/x/remapper@3.1.2/src/general.ts";
import { notesBetween } from "https://deno.land/x/remapper@3.1.2/src/general.ts";
import * as rm from "https://deno.land/x/remapper@3.1.2/src/mod.ts"
import { Color } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";
import { Note } from "https://deno.land/x/remapper@3.1.2/src/note.ts";

import * as math from "https://deno.land/x/math@v1.1.0/mod.ts";



const map = new rm.Difficulty('ExpertPlusStandard', 'ExpertPlusLawless')



// ----------- { FUNCTIONS } -----------
// An amalgamation of random bs either turned into functions
// or yoinked from other projects and modififed for rm/ts.
// All scripts taken from others' projects should be credited.


function randInt(min: number, max: number) {
   return Math.floor(Math.random() * (max - min) + min) 
}

// Swifter1243's removeEnv function
function removeEnv(ids: string[], regex = false) {
    const env = new rm.Environment(undefined, regex ? 'Regex' : undefined)
    env.active = false

    ids.forEach((x) => {
        env.id = x
        env.push()
    });
}

// Modded Mawntee trackOnNotesBetweenRBSep function
function trackNotesBetweenRBSep(trackR: string, trackB: string, startTime: number, endTime: number) {
    rm.notesBetween(startTime, endTime, (note) =>{
        if (note.type === 1) {
            note.track.add(trackB)
        }
        else{
        if (note.type === 0) {
            note.track.add(trackR)
        }
        else {
            console.log("Unexpected note type at" + note.time + ". Listed note type: " + note.type)
        }
    }
    note.push(false, false);
    map.notes.splice(map.notes.indexOf(note),1);
    });
}

function trackOnNotesBetween(startBeat: number, endBeat: number, trackName: string) {
    rm.notesBetween(startBeat, endBeat, (note) =>{
        note.track.add(trackName);
        note.push(false, false);
        map.notes.splice(map.notes.indexOf(note),1);
    });
}


function fakeDupeTrackOnNotesetween(startBeat: number, endBeat:number, trackName: string, secondaryTrack?: string) {
    rm.notesBetween(startBeat, endBeat, (note) =>{
        note.track.add(trackName);
        if(secondaryTrack != null) {
            note.track.add(secondaryTrack);
        }
        note.push(true, false)
    })
}


// ----------- { MAP VARIABLES } -----------



// ----------- { TRACK ASSIGNMENT } -----------

rm.notesBetween(192.01, 198.5, (note) =>{
    note.track.add('fake1');
    note.push(true, true);
    map.notes.splice(map.notes.indexOf(note),1);
    }
    );

rm.notesBetween(200.01, 206.5, (note) =>{
    note.track.add('fake2');
    note.push(true, true); 
    map.notes.splice(map.notes.indexOf(note),1);
    }
    );

rm.notesBetween(208.01, 214.5, (note) =>{
    note.track.add('fake3');
    note.push(true, true);
    map.notes.splice(map.notes.indexOf(note),1);
    }
    );



// ----------- { MAP TRACK EFFECTS } -----------


//Why no work ;-;

for(let k = 0; k << 3; k++) {

for(let i = 0; i << 5; i++) {

fakeDupeTrackOnNotesetween(192.01, 198.5, 'fake1', 'fakeDupe' + i + 'Row' + k)
const DupedFake1Path = new rm.CustomEvent(190).assignPathAnimation('fakeDupe' + i + 'Row' + k, 8)
DupedFake1Path.animate.definitePosition = [[-16 + (6 * i), -4 + (4 * k), 11, 0],[-16 + (6 * i), -4 + (4 * k), 0, 0]]
    }
}


// Fake event 1
const fakeevent1 = new rm.CustomEvent(190).animateTrack('fake1', 8)
fakeevent1.animate.dissolve = [[1,0],[0,1]];
fakeevent1.animate.dissolveArrow = [[1,0],[0,1]];
fakeevent1.push();

const fakepath1 = new rm.CustomEvent(192).assignPathAnimation('fake1', 6)
fakepath1.animate.scale = [[1,1,1,0],[2,2,2,1]];
fakepath1.animate.definitePosition = [[0,0,11,0],[0,0,0,1]];
fakepath1.push();

// Fake event 2
const fakeevent2 = new rm.CustomEvent(198).animateTrack('fake2', 8);
fakeevent2.animate.dissolve = [[1,0],[0,1]];
fakeevent2.animate.dissolveArrow = [[1,0],[0,1]];
fakeevent2.push();

const fakepath2 = new rm.CustomEvent(200).assignPathAnimation('fake2', 6)
fakepath2.animate.scale = [[1,1,1,0],[2,2,2,1]];
fakepath2.animate.definitePosition = [[0,0,11,0],[0,0,0,1]];
fakepath2.push();

// Fake event 3
const fakeevent3 = new rm.CustomEvent(206).animateTrack('fake3', 8);
fakeevent3.animate.dissolve = [[1,0],[0,1]];
fakeevent3.animate.dissolveArrow = [[1,0],[0,1]];
fakeevent3.push();

const fakepath3 = new rm.CustomEvent(208).assignPathAnimation('fake3', 6)
fakepath3.animate.scale = [[1,1,1,0],[2,2,2,1]];
fakepath3.animate.definitePosition = [[0,0,11,0],[0,0,0,1]];
fakepath3.push();


// ----------- { ENVIRONMENT EFFECTS } -----------




// ----------- { OUTPUT } -----------

map.save()
