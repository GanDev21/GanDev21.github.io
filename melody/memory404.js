document.addEventListener('DOMContentLoaded', ()=>{
    //'use strict';
    // ---------- GUITAR CHORD DATA AND FRET POSITIONS
    let chords={C:{7:["C-4","E-4","A#-4","C-5","E-5"],major:["C-4","E-4","G-4","C-5","E-5"],minor:["C-4","D#-4","G-4","C-5","G-5"],m7:["C-4","D#-4","A#-4","D#-5"],maj7:["G-3","C-4","E-4","G-4","B-4","E-5"],sus4:["C-4","F-4","G-4","C-5","F-5"],dim:["C-4","D#-4","C-5","F#-5"],dim7:["D#-4","A-4","C-5","F#-5"],aug:["C-4","E-4","G#-4","C-5"]},"C#":{7:["C#-4","F-4","B-4","C#-5"],major:["C#-4","F-4","G#-4","C#-5","F-5"],minor:["C#-4","E-4","G#-4","C#-5"],m7:["C#-4","G#-4","B-4","E-5","G#-5"],maj7:["C#-4","F-4","G#-4","C-5","F-5"],sus4:["C#-4","F#-4","G#-4","C#-5"],dim:["C#-4","E-4","C#-5","G-5"],dim7:["E-4","A#-4","C#-5","G-5"],aug:["C#-4","F#-4","B-4","C#-5","F#-5"]},D:{7:["D-4","A-4","C-5","F#-5"],major:["D-4","A-4","D-5","F#-5"],minor:["D-4","A-4","D-5","F-5"],m7:["D-4","A-4","C-5","F-5"],maj7:["D-4","A-4","C#-5","F#-5"],sus4:["D-4","A-4","D-5","G-5"],dim:["D-4","G#-4","F-5"],dim7:["D-4","G#-4","B-4","F-5"],aug:["D-4","A#-4","D-5","F#-5"]},"D#":{7:["D#-4","A#-4","C#-5","G-5"],major:["D#-4","A#-4","D#-5","G-5"],minor:["D#-4","A#-4","D#-5","F#-5"],m7:["D#-4","A#-4","C#-5","F#-5"],maj7:["A#-3","D#-4","A#-4","D-5","G-5"],sus4:["D#-4","A#-4","D#-5","G#-5"],dim:["D#-4","A-4","F#-5"],dim7:["D#-4","A-4","C-5","F#-5"],aug:["G-4","B-4","D#-5","G-5"]},E:{7:["E-3","B-3","D-4","G#-4","B-4","E-5"],major:["E-3","B-3","E-4","G#-4","B-4","E-5"],minor:["E-3","B-3","E-4","G-4","B-4","E-5"],m7:["E-3","B-3","E-4","G-4","D-5","E-5"],maj7:["E-3","B-3","D#-4","G#-4","B-4","E-5"],sus4:["E-3","B-3","E-4","A-4","B-4","E-5"],dim:["E-4","A#-4","G-5"],dim7:["E-3","A#-3","E-4","G-4","C#-5","E-5"],aug:["E-3","C-4","E-4","G#-4","C-5","E-5"]},F:{7:["F-3","C-4","D#-4","A-4","C-5","F-5"],major:["F-3","C-4","F-4","A-4","C-5","F-5"],minor:["F-3","C-4","F-4","G#-4","C-5","F-5"],m7:["F-3","C-4","D#-4","G#-4","C-5","F-5"],maj7:["F-4","A-4","C-5","E-5"],sus4:["F-3","C-4","F-4","A#-4","C-5","F-5"],dim:["F-4","B-4","G#-5"],dim7:["F-3","D-4","G#-4","B-4","F-5"],aug:["F-4","A-4","C#-5","F-5"]},"F#":{7:["F#-3","C#-4","E-4","A#-4","C#-5","F#-5"],major:["F#-3","C#-4","F#-4","A#-4","C#-5","F#-5"],minor:["F#-3","C#-4","F#-4","A-4","C#-5","F#-5"],m7:["F#-3","C#-4","E-4","A-4","C#-5","F#-5"],maj7:["F#-3","C#-4","F-4","A#-4","C#-5","F#-5"],sus4:["F#-3","C#-4","F#-4","B-4","C#-5","F#-5"],dim:["F#-3","A-3","A-4","C-5"],dim7:["F#-3","D#-4","A-4","C-5"],aug:["F#-4","A#-4","D-5","F#-5"]},G:{7:["G-3","B-3","D-4","G-4","B-4","F-5"],major:["G-3","B-3","D-4","G-4","B-4","G-5"],minor:["G-3","A#-3","D-4","G-4","D-5","G-5"],m7:["G-3","D-4","F-4","A#-4","D-5","G-5"],maj7:["G-3","B-3","D-4","G-4","B-4","F#-5"],sus4:["G-3","C-4","D-4","G-4","C-5","G-5"],dim:["G-3","A#-3","A#-4","C#-5"],dim7:["G-3","A#-3","A#-4","C#-5","E-5"],aug:["G-3","B-3","D#-4","G-4","B-4"]},"G#":{7:["D#-4","G#-4","C-5","F#-5"],major:["G#-3","C-4","D#-4","G#-4","C-5"],minor:["G#-3","D#-4","G#-4","B-4","D#-5","G#-5"],m7:["G#-3","D#-4","F#-4","B-4","D#-5","G#-5"],maj7:["G#-3","D#-4","G-4","C-5","D#-5","G#-5"],sus4:["D#-4","G#-4","C#-5","G#-5"],dim:["G#-3","B-3","B-4","D-5"],dim7:["D-4","G#-4","B-4","F-5"],aug:["G#-3","C-4","E-4","G#-4","C-5"]},A:{7:["A-3","E-4","G-4","C#-5","E-5"],major:["A-3","E-4","A-4","C#-5","E-5"],minor:["A-3","E-4","A-4","C-5","E-5"],m7:["A-3","E-4","G-4","C-5","E-5"],maj7:["A-3","E-4","G#-4","C#-5","E-5"],sus4:["A-3","E-4","A-4","D-5","E-5"],dim:["A-3","D#-4","A-4","C-5"],dim7:["A-3","D#-4","A-4","C-5","F#-5"],aug:["A-3","F-4","A-4","C#-5","F-5"]},"A#":{7:["A#-3","F-4","G#-4","D-5","F-5"],major:["A#-3","F-4","A#-4","D-5","F-5"],minor:["A#-3","F-4","A#-4","C#-5","F-5"],m7:["A#-3","F-4","G#-4","C#-5","F-5"],maj7:["A#-3","F-4","A-4","D-5","F-5"],sus4:["A#-3","F-4","A#-4","D#-5","F-5"],dim:["A#-3","E-4","A#-4","C#-5"],dim7:["A#-3","E-4","G-4","C#-5","E-5"],aug:["A#-3","F#-4","A#-4","D-5"]},B:{7:["B-3","D#-4","A-4","B-4","F#-5"],major:["F#-3","B-3","F#-4","B-4","D#-5","F#-5"],minor:["F#-3","B-3","F#-4","B-4","D-5","F#-5"],m7:["F#-3","B-3","F#-4","A-4","D-5","F#-5"],maj7:["F#-3","B-3","F#-4","A#-4","D#-5","F#-5"],sus4:["F#-3","B-3","F#-4","B-4","E-5","F#-5"],dim:["B-3","D-4","B-4","F-5"],dim7:["B-3","F-4","G#-4","D-5","F-5"],aug:["B-3","D#-4","G-4","B-4"]}};
    let fretPos={C:{7:[-1,3,2,3,1,0],major:[-1,3,2,0,1,0],minor:[-1,3,1,0,1,3],m7:[-1,3,1,3,4,-1],maj7:[3,3,2,0,0,0],sus4:[-1,3,3,0,1,1],dim:[-1,3,1,-1,1,2],dim7:[-1,-1,1,2,1,2],aug:[-1,3,2,1,1,-1]},"C#":{7:[-1,4,3,4,2,-1],major:[-1,4,3,1,2,1],minor:[-1,4,2,1,2,-1],m7:[-1,4,6,4,5,4],maj7:[-1,4,3,1,1,1],sus4:[-1,4,4,1,2,-1],dim:[-1,4,2,-1,2,3],dim7:[-1,-1,2,3,2,3],aug:[-1,4,4,4,2,2]},D:{7:[-1,-1,0,2,1,2],major:[-1,-1,0,2,3,2],minor:[-1,-1,0,2,3,1],m7:[-1,-1,0,2,1,1],maj7:[-1,-1,0,2,2,2],sus4:[-1,-1,0,2,3,3],dim:[-1,-1,0,1,-1,1],dim7:[-1,-1,0,1,0,1],aug:[-1,-1,0,3,3,2]},"D#":{7:[-1,-1,1,3,2,3],major:[-1,-1,1,3,4,3],minor:[-1,-1,1,3,4,2],m7:[-1,-1,1,3,2,2],maj7:[-1,1,1,3,3,3],sus4:[-1,-1,1,3,4,4],dim:[-1,-1,1,2,-1,2],dim7:[-1,-1,1,2,1,2],aug:[-1,-1,5,4,4,3]},E:{7:[0,2,0,1,0,0],major:[0,2,2,1,0,0],minor:[0,2,2,0,0,0],m7:[0,2,2,0,3,0],maj7:[0,2,1,1,0,0],sus4:[0,2,2,2,0,0],dim:[-1,-1,2,3,-1,3],dim7:[0,1,2,0,2,0],aug:[0,3,2,1,1,0]},F:{7:[1,3,1,2,1,1],major:[1,3,3,2,1,1],minor:[1,3,3,1,1,1],m7:[1,3,1,1,1,1],maj7:[-1,-1,3,2,1,0],sus4:[1,3,3,3,1,1],dim:[-1,-1,3,4,-1,4],dim7:[1,-1,0,1,0,1],aug:[-1,-1,3,2,2,1]},"F#":{7:[2,4,2,3,2,2],major:[2,4,4,3,2,2],minor:[2,4,4,2,2,2],m7:[2,4,2,2,2,2],maj7:[2,4,3,3,2,2],sus4:[2,4,4,4,2,2],dim:[2,0,-1,2,1,-1],dim7:[2,-1,1,2,1,-1],aug:[-1,-1,4,3,3,2]},G:{7:[3,2,0,0,0,1],major:[3,2,0,0,0,3],minor:[3,1,0,0,3,3],m7:[3,5,3,3,3,3],maj7:[3,2,0,0,0,2],sus4:[3,3,0,0,1,3],dim:[3,1,-1,3,2,-1],dim7:[3,1,-1,3,2,0],aug:[3,2,1,0,0,-1]},"G#":{7:[-1,-1,1,1,1,2],major:[4,3,1,1,1,-1],minor:[4,6,6,4,4,4],m7:[4,6,4,4,4,4],maj7:[4,6,5,5,4,4],sus4:[-1,-1,1,1,2,4],dim:[4,2,-1,4,3,-1],dim7:[-1,-1,0,1,0,1],aug:[4,3,2,1,1,-1]},A:{7:[-1,0,2,0,2,0],major:[-1,0,2,2,2,0],minor:[-1,0,2,2,1,0],m7:[-1,0,2,0,1,0],maj7:[-1,0,2,1,2,0],sus4:[-1,0,2,2,3,0],dim:[-1,0,1,2,1,-1],dim7:[-1,0,1,2,1,2],aug:[-1,0,3,2,2,1]},"A#":{7:[-1,1,3,1,3,1],major:[-1,1,3,3,3,1],minor:[-1,1,3,3,2,1],m7:[-1,1,3,1,2,1],maj7:[-1,1,3,2,3,1],sus4:[-1,1,3,3,4,1],dim:[-1,1,2,3,2,-1],dim7:[-1,1,2,0,2,0],aug:[-1,1,4,3,3,-1]},B:{7:[-1,2,1,2,0,2],major:[2,2,4,4,4,2],minor:[2,2,4,4,3,2],m7:[2,2,4,2,3,2],maj7:[2,2,4,3,4,2],sus4:[2,2,4,4,5,2],dim:[-1,2,0,-1,0,1],dim7:[-1,2,3,1,3,1],aug:[-1,2,1,0,0,-1]}};


    // ---------- CREATE WAV AUDIO FILES (based on AudioSynth by Keith Horwood)
    // For more information on AudioSynth and on dynamic generation of sound
    // check out https://github.com/keithwhor/audiosynth

    let URL = window.URL || window.webkitURL;
    let Blob = window.Blob;
    let notes = {'C':261.63,'C#':277.18,'D':293.66,'D#':311.13,'E':329.63,'F':349.23,'F#':369.99,'G':392.00,'G#':415.30,'A':440.00,'A#':466.16,'B':493.88};
    let mod = [function(i, sampleRate, frequency, x) { return 1 * Math.sin(2 * Math.PI * ((i / sampleRate) * frequency) + x); },function(i, sampleRate, frequency, x) { return 1 * Math.sin(4 * Math.PI * ((i / sampleRate) * frequency) + x); }];
    let profiles = [
        { // piano
            attack: function() { return 0.002; },
            dampen: function(sampleRate, frequency, volume) {
                return Math.pow(0.5*Math.log((frequency*volume)/sampleRate),2);
            },
            wave: function(i, sampleRate, frequency, volume) {
                let base = mod[0];
                return mod[1](
                    i,
                    sampleRate,
                    frequency,
                    Math.pow(base(i, sampleRate, frequency, 0), 2) +
                        (0.75 * base(i, sampleRate, frequency, 0.25)) +
                        (0.1 * base(i, sampleRate, frequency, 0.5))
                );
            }
        },
        { // acoustic guitar
            attack:	function() { return 0.002; },
            dampen: function() { return 1; },
            wave: function(i, sampleRate, frequency) {
                let vars = this.vars;
                vars.valueTable = !vars.valueTable?[]:vars.valueTable;
                if(typeof(vars.playVal)=='undefined') { vars.playVal = 0; }
                if(typeof(vars.periodCount)=='undefined') { vars.periodCount = 0; }
                let valueTable = vars.valueTable;
                let playVal = vars.playVal;
                let periodCount = vars.periodCount;
                let period = sampleRate/frequency;
                let p_hundredth = Math.floor((period-Math.floor(period))*100);
                let resetPlay = false;
                if(valueTable.length<=Math.ceil(period)) {
                    valueTable.push(Math.round(Math.random())*2-1);
                    return valueTable[valueTable.length-1];
                } else {
                    valueTable[playVal] = (valueTable[playVal>=(valueTable.length-1)?0:playVal+1] + valueTable[playVal]) * 0.5;
                    if(playVal>=Math.floor(period)) {
                        if(playVal<Math.ceil(period)) {
                            if((periodCount%100)>=p_hundredth) {
                                resetPlay = true;
                                valueTable[playVal+1] = (valueTable[0] + valueTable[playVal+1]) * 0.5;
                                vars.periodCount++;
                            }
                        } else {
                            resetPlay = true;
                        }
                    }
                    let _return = valueTable[playVal];
                    if(resetPlay) { vars.playVal = 0; } else { vars.playVal++; }
                    return _return;
                }
            }
        }
    ];
    let fileCache = buildCache();

    function buildCache(){
        let cache = [];
        let l = profiles.length;
        while (cache.length<l){
            let octaveList = [];
            for (let i=0; i<8; i++){
                let noteList = {};
                for (let k in notes){
                    noteList[k] = {};
                }
                octaveList.push(noteList);
            };
            cache.push(octaveList);
        }
        return cache;
    }

    function pack(c,arg){
        return [new Uint8Array([arg, arg >> 8]), new Uint8Array([arg, arg >> 8, arg >> 16, arg >> 24])][c]
    }

    function createAudio(instrumentID, note, octave){
        let time = 2;
        if (typeof(fileCache[instrumentID][octave-1][note][time])!='undefined'){
            return fileCache[instrumentID][octave-1][note][time];
        } else {
            let temp = {};
            let frequency = notes[note] * Math.pow(2, octave-4);
            let sampleRate = 44100;
            let volume = 32768/4;
            let channels = 1;
            let bitsPerSample = 16;
            let attack = profiles[instrumentID].attack();
            let dampen = profiles[instrumentID].dampen(sampleRate, frequency, volume);
            let waveFunc = profiles[instrumentID].wave;
            let waveBind = {modulate:mod, vars:temp}
            let val = 0;

            let data = new Uint8Array(new ArrayBuffer(Math.ceil(sampleRate * time * 2)));
            let attackLen = (sampleRate * attack) | 0;
            let decayLen = (sampleRate * time) | 0;

            for (let i=0 | 0; i !== attackLen; i++){
                val = volume * (i/(sampleRate*attack)) * waveFunc.call(waveBind, i, sampleRate, frequency, volume);
                data[i<<1] = val;
                data[(i<<1)+1] = val >> 8;
            }
            for (let i=0 | 0; i !== decayLen; i++){
                val = volume * Math.pow((1-((i-(sampleRate*attack))/(sampleRate*(time-attack)))),dampen) * waveFunc.call(waveBind, i, sampleRate, frequency, volume);
                data[i << 1] = val;
                data[(i << 1) + 1] = val >> 8;
            }

            let out = [
                'RIFF',
                pack(1, 4 + (8 + 24/* chunk 1 length */) + (8 + 8/* chunk 2 length */)), // Length
                'WAVE',
                // chunk 1
                'fmt ', // Sub-chunk identifier
                pack(1, 16), // Chunk length
                pack(0, 1), // Audio format (1 is linear quantization)
                pack(0, channels),
                pack(1, sampleRate),
                pack(1, sampleRate * channels * bitsPerSample / 8), // Byte rate
                pack(0, channels * bitsPerSample / 8),
                pack(0, bitsPerSample),
                // chunk 2
                'data', // Sub-chunk identifier
                pack(1, data.length * channels * bitsPerSample / 8), // Chunk length
                data
            ];
            let blob = new Blob(out, {type: 'audio/wav'});
            let dataURI = URL.createObjectURL(blob);
            fileCache[instrumentID][octave-1][note][time] = dataURI;
            return dataURI;
        }
    }

    function preloadSounds(){
        let noteList = Object.keys(notes);
        noteList.forEach(note => {
            createAudio(0,note,4);
        });

        let guitarNotes = [];
        for (let i=3; i<7; i++){
            noteList.forEach(e => guitarNotes.push(e.concat(`-${i}`)));
        };
        guitarNotes.splice(0,4);
        guitarNotes.forEach(e => {
            let [note,octave] = e.split('-');
            createAudio(1,note,octave);
        });
    }

    // ---------- PlAY AUDIO FILES
    function play(instrumentID, note, octave){
        let time = 2;
        let src = fileCache[instrumentID][octave-1][note][time];
        let audio = new Audio(src);
        audio.play();
    }

    function playChord(instrument,chord){
        let [key,suffix] = chord.split('-');
        let notesArr = [...chords[key][suffix]];
        let instrumentID;
        if (instrument === 'piano'){
            notesArr = convertGuitarToPiano(notesArr);
            instrumentID = 0;
        } else if (instrument === 'guitar') {
            instrumentID = 1;
        } else if (instrument === 'root') {
            instrumentID = 0;
            notesArr = [`${key}-4`];
        }
        notesArr.forEach(note => {
            let [key,octave] = note.split('-');
            play(instrumentID,key,octave)
        })
    }

    function convertGuitarToPiano(arr){
        arr = arr.map(n => n.split('-')[0]);
        arr = [...new Set(arr)];
        arr = arr.map(n => n.concat('-4'));
        return arr;
    }


    // ---------- GAME FUNCTIONS START HERE
    let board = document.querySelector('#board');
    let overlay = document.querySelector('#overlay');
    let headerNewGame = document.querySelector('#new-game');
    let scoreCurrent = document.querySelector('#score-current');
    let scoreBest = document.querySelector('#score-best');
    let options = {
        mode:['root','guitar'],
        suffixes:['major','minor','7','sus4'],
        accs:'sharp',
        colour:'on'
    };
    let volume = 'on';
    let cards = [];
    let moves = [];
    let scores = [];
    let gameWin = false;
    let timeouts = [];
    let isMobile = false;


    // ---------- HANDLE OPTIONS
    function setOptions(mode,suffixes,accs,colour){
        if (arguments.length !== 0){
            options = {mode,suffixes,accs,colour}
        }
        let m = options.mode;
        let s = options.suffixes;
        let a = options.accs;
        let c = options.colour;
        document.querySelectorAll('fieldset input').forEach(input => input.checked = false);
        document.querySelector(`#card-1-${m[0]}`).checked = true;
        document.querySelector(`#card-2-${m[1]}`).checked = true;
        s.forEach(suffix => document.querySelector(`#suffix-${suffix}`).checked = true);
        document.querySelector(`#accs-${a}`).checked = true;
        document.querySelector(`#colour-${c}`).checked = true;
        setPreviewLine('1',m[0]);
        setPreviewLine('2',m[1]);
    }

    function getOptions(){
        let mode = [document.forms[0].elements['mode-1'].value.replace('1-',''),document.forms[0].elements['mode-2'].value.replace('2-','')];
        let suffixes = Array.from(document.forms[0].elements['suffix']).filter(el=>el.checked).map(el=>el.value);
        let accs = document.forms[0].elements['accs'].value;
        let colour = document.forms[0].elements['colour'].value;
        options = {mode,suffixes,accs,colour};
    }

    function setPreviewLine(c,m){
        let line = document.querySelector('#line line');
        let vals = {'chordname':47,'guitar':149,'root':251,'piano':353};
        let att = `x${c}`;
        line.setAttribute(att,vals[m])
    }


    // ---------- CREATE GAME BOARD
    function shuffle(arr){
        for (let i = arr.length-1; i>0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        };
        return arr;
    }

    function createDeck(){
        let deck = [];
        let noteList = Object.keys(notes);
        let randomN = 0;
        let randomS = 0;
        let chord = '';
        if (options.mode.includes('root')){
            while (deck.length < 8) {
                randomN = Math.floor(Math.random() * 12);
                if (!deck.includes(randomN)){
                    deck.push(randomN)
                }
            }
            deck = deck.map(rN => {
                randomS = Math.floor(Math.random() * options.suffixes.length);
                chord = `${noteList[rN]}-${options.suffixes[randomS]}`;
                return chord;
            })
        } else {
            while (deck.length < 8){
                randomN = Math.floor(Math.random() * 12);
                randomS = Math.floor(Math.random() * options.suffixes.length);
                chord = `${noteList[randomN]}-${options.suffixes[randomS]}`;
                if (!deck.includes(chord)){
                    deck.push(chord)
                }
            }
        }
        deck = [...deck.map((e,i)=>[e+'_1',i]),...deck.map((e,i)=>[e+'_2',i])];
        shuffle(deck);
        return deck;
    }

    function createDemoDeck(){
        let deck = ['A-minor','E-aug','C-major','D-major','F-maj7','G-major','F#-sus4','B-sus4']; // Stairway
        deck = [...deck.map((e,i)=>[e+'_1',i]),...deck.map((e,i)=>[e+'_2',i])];
        shuffle(deck);
        return deck;
    }

    function createBoard(demo = false){
        cards = [];
        let deck;
        if (demo){
            deck = createDemoDeck();
        } else {
            deck = createDeck();
        };
        let orderNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
        let orderSuffixes = ['major','minor','7','m7','maj7','sus4','dim','dim7','aug'];
        let orderTypes = ['chordname','root','guitar','piano'];
        let guitarSVG =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><circle cx="23.5" cy="315" r="9" fill="#fff" fill-opacity="0.6" stroke="#fff" stroke-width="1"/><circle cx="23.5" cy="285" r="9" fill="#fff" fill-opacity="0.6" stroke="#fff" stroke-width="1"/><circle cx="23.5" cy="255" r="9" fill="#fff" fill-opacity="0.6" stroke="#fff" stroke-width="1"/><circle cx="23.5" cy="225" r="9" fill="#fff" fill-opacity="0.6" stroke="#fff" stroke-width="1"/><circle cx="23.5" cy="195" r="9" fill="#fff" fill-opacity="0.6" stroke="#fff" stroke-width="1"/><circle cx="23.5" cy="165" r="9" fill="#fff" fill-opacity="0.6" stroke="#fff" stroke-width="1"/><rect width="400" height="400" fill="none"/></svg>`;
        let pianoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect class="piano-C white" x="14" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect class="piano-D white" x="60.5" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect class="piano-E white" x="107" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect class="piano-F white" x="153.5" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect class="piano-G white" x="200" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect class="piano-A white" x="246.5" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect class="piano-B white" x="293" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect x="339.5" y="150" width="46.5" height="180" fill="#fff" stroke="#000" stroke-width="3"/><rect class="piano-Csharp black" x="40.5" y="150" width="40" height="110"/><rect class="piano-Dsharp black" x="87" y="150" width="40" height="110"/><rect class="piano-Fsharp black" x="180" y="150" width="40" height="110"/><rect class="piano-Gsharp black" x="226.5" y="150" width="40" height="110"/><rect class="piano-Asharp black" x="273" y="150" width="40" height="110"/><rect x="366" y="150" width="20" height="110"/><g><text transform="translate(28.55 317.5)">C</text><text transform="translate(354.05 317.5)">C</text><text transform="translate(73.76 317.5)">D</text><text transform="translate(122.87 317.5)">E</text><text transform="translate(169.45 317.5)">F</text><text transform="translate(213.56 317.5)">G</text><text transform="translate(260.57 317.5)">A</text><text transform="translate(308.12 317.5)">B</text></g><g id="sharp"><text transform="translate(44.35 252.5)" fill="#fff">C#</text><text transform="translate(89.56 252.5)" fill="#fff">D#</text><text transform="translate(185.24 252.5)" fill="#fff">F#</text><text transform="translate(229.36 252.5)" fill="#fff">G#</text><text transform="translate(276.37 252.5)" fill="#fff">A#</text></g><g id="flat"><text transform="translate(41.98 252.5)" fill="#fff">Db</text><text transform="translate(91.09 252.5)" fill="#fff">Eb</text><text transform="translate(181.78 252.5)" fill="#fff">Gb</text><text transform="translate(228.83 252.5)" fill="#fff">Ab</text><text transform="translate(276.34 252.5)" fill="#fff">Bb</text></g><rect width="400" height="400" fill="none"/></svg>`;
        let sheetSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect x="14" y="150" width="372" height="180" fill="#fff"/><g class="notes"><path class="sheet-C" d="M241.8,305.46c0,4.56-4.54,10-15.44,10s-18.16-6.39-18.16-11.87,9.08-9.13,16.35-9.13C233.63,294.5,241.8,300.89,241.8,305.46Zm-15.44,8.21c3.63,0,5.45-3.65,5.45-7.3s-2.72-9.13-7.26-9.13c-2.73,0-6.36,3.19-6.36,6.85S220.91,313.67,226.36,313.67Z" transform="translate(0)"/><path class="sheet-D" d="M241.8,293c0,4.56-4.54,10-15.44,10s-18.16-6.39-18.16-11.87,9.08-9.13,16.35-9.13C233.63,282,241.8,288.39,241.8,293Zm-15.44,8.21c3.63,0,5.45-3.65,5.45-7.3s-2.72-9.13-7.26-9.13c-2.73,0-6.36,3.19-6.36,6.85S220.91,301.17,226.36,301.17Z" transform="translate(0)"/><path class="sheet-E" d="M241.8,280.46c0,4.56-4.54,10-15.44,10s-18.16-6.39-18.16-11.87,9.08-9.13,16.35-9.13C233.63,269.5,241.8,275.89,241.8,280.46Zm-15.44,8.21c3.63,0,5.45-3.65,5.45-7.3s-2.72-9.13-7.26-9.13c-2.73,0-6.36,3.19-6.36,6.85S220.91,288.67,226.36,288.67Z" transform="translate(0)"/><path class="sheet-F" d="M241.8,268c0,4.56-4.54,10-15.44,10s-18.16-6.39-18.16-11.87,9.08-9.13,16.35-9.13C233.63,257,241.8,263.39,241.8,268Zm-15.44,8.21c3.63,0,5.45-3.65,5.45-7.3s-2.72-9.13-7.26-9.13c-2.73,0-6.36,3.19-6.36,6.85S220.91,276.17,226.36,276.17Z" transform="translate(0)"/><path class="sheet-G" d="M241.8,255.46c0,4.56-4.54,10-15.44,10s-18.16-6.39-18.16-11.87,9.08-9.13,16.35-9.13C233.63,244.5,241.8,250.89,241.8,255.46Zm-15.44,8.21c3.63,0,5.45-3.65,5.45-7.3s-2.72-9.13-7.26-9.13c-2.73,0-6.36,3.19-6.36,6.85S220.91,263.67,226.36,263.67Z" transform="translate(0)"/><path class="sheet-A" d="M241.8,243c0,4.56-4.54,10-15.44,10s-18.16-6.39-18.16-11.87,9.08-9.13,16.35-9.13C233.63,232,241.8,238.39,241.8,243Zm-15.44,8.21c3.63,0,5.45-3.65,5.45-7.3s-2.72-9.13-7.26-9.13c-2.73,0-6.36,3.19-6.36,6.85S220.91,251.17,226.36,251.17Z" transform="translate(0)"/><path class="sheet-B" d="M241.8,230.46c0,4.56-4.54,10-15.44,10s-18.16-6.39-18.16-11.87,9.08-9.13,16.35-9.13C233.63,219.5,241.8,225.89,241.8,230.46Zm-15.44,8.21c3.63,0,5.45-3.65,5.45-7.3s-2.72-9.13-7.26-9.13c-2.73,0-6.36,3.19-6.36,6.85S220.91,238.67,226.36,238.67Z" transform="translate(0)"/></g><line class="c-line" x1="200" y1="305.5" x2="250" y2="305.5" fill="none" stroke="#000" stroke-width="5"/><g class="sharps"><path class="sheet-Csharp" d="M190,293v-7.5l-5,1.82V275.5l-2,.73V288l-7,2.55V278.5l-2,.73V291.3l-4,1.45v7.5l4-1.45v17.5l-4,1.45v7.5l4-1.45v12.43l2-.73V323.07l7-2.55v12.71l2-.73V319.79l5-1.82v-7.5l-5,1.82v-17.5Zm-7,20-7,2.55v-17.5l7-2.55Z" transform="translate(0)"/><path class="sheet-Dsharp" d="M190,280.47V273l-5,1.82V263l-2,.73v11.79l-7,2.55V266l-2,.73V278.8l-4,1.45v7.5l4-1.45v17.5l-4,1.45v7.5l4-1.45v12.43l2-.73V310.57l7-2.55v12.71l2-.73V307.29l5-1.82V298l-5,1.82v-17.5Zm-7,20-7,2.55v-17.5l7-2.55Z" transform="translate(0)"/><path class="sheet-Esharp" d="M190,268v-7.5l-5,1.82V250.5l-2,.73V263l-7,2.55V253.5l-2,.73V266.3l-4,1.45v7.5l4-1.45v17.5l-4,1.45v7.5l4-1.45v12.43l2-.73V298.07l7-2.55v12.71l2-.73V294.79l5-1.82v-7.5l-5,1.82v-17.5Zm-7,20-7,2.55v-17.5l7-2.55Z" transform="translate(0)"/><path class="sheet-Fsharp" d="M190,255.47V248l-5,1.82V238l-2,.73v11.79l-7,2.55V241l-2,.73V253.8l-4,1.45v7.5l4-1.45v17.5l-4,1.45v7.5l4-1.45v12.43l2-.73V285.57l7-2.55v12.71l2-.73V282.29l5-1.82V273l-5,1.82v-17.5Zm-7,20-7,2.55v-17.5l7-2.55Z" transform="translate(0)"/><path class="sheet-Gsharp" d="M190,243v-7.5l-5,1.82V225.5l-2,.73V238l-7,2.55V228.5l-2,.73V241.3l-4,1.45v7.5l4-1.45v17.5l-4,1.45v7.5l4-1.45v12.43l2-.73V273.07l7-2.55v12.71l2-.73V269.79l5-1.82v-7.5l-5,1.82v-17.5Zm-7,20-7,2.55v-17.5l7-2.55Z" transform="translate(0)"/><path class="sheet-Asharp" d="M190,230.47V223l-5,1.82V213l-2,.73v11.79l-7,2.55V216l-2,.73V228.8l-4,1.45v7.5l4-1.45v17.5l-4,1.45v7.5l4-1.45v12.43l2-.73V260.57l7-2.55v12.71l2-.73V257.29l5-1.82V248l-5,1.82v-17.5Zm-7,20.05-7,2.55v-17.5l7-2.55Z" transform="translate(0)"/><path class="sheet-Bsharp" d="M190,218v-7.5l-5,1.82V200.5l-2,.73V213l-7,2.55V203.5l-2,.73V216.3l-4,1.45v7.5l4-1.45v17.5l-4,1.45v7.5l4-1.45v12.43l2-.73V248.07l7-2.55v12.71l2-.73V244.79l5-1.82v-7.5l-5,1.82v-17.5ZM183,238l-7,2.55v-17.5l7-2.55Z" transform="translate(0)"/></g><g class="flats"><path class="sheet-Cflat" d="M177.71,312.46a68.74,68.74,0,0,0,8.79-7.92,9.41,9.41,0,0,0,2.36-6.22,6.52,6.52,0,0,0-2.15-5.25,8,8,0,0,0-5.35-1.82,12,12,0,0,0-8.15,3.21V264.25H170v55.5A72,72,0,0,1,177.71,312.46Zm-4.5-14.35a10.15,10.15,0,0,1,3.11-2.57,7.86,7.86,0,0,1,3.32-.65,4.71,4.71,0,0,1,3.32,1.29,4.2,4.2,0,0,1,1.4,3.21q0,2.58-3.54,6.43a64.32,64.32,0,0,1-7.61,7.07Z" transform="translate(0)"/><path class="sheet-Dflat" d="M177.71,300A68.74,68.74,0,0,0,186.5,292a9.41,9.41,0,0,0,2.36-6.22,6.52,6.52,0,0,0-2.15-5.25,8,8,0,0,0-5.35-1.82,12,12,0,0,0-8.15,3.21V251.75H170v55.5A72,72,0,0,1,177.71,300Zm-4.5-14.35a10.15,10.15,0,0,1,3.11-2.57,7.86,7.86,0,0,1,3.32-.65,4.71,4.71,0,0,1,3.32,1.29,4.2,4.2,0,0,1,1.4,3.21q0,2.58-3.54,6.43a64.32,64.32,0,0,1-7.61,7.07Z" transform="translate(0)"/><path class="sheet-Eflat" d="M177.71,287.46a68.74,68.74,0,0,0,8.79-7.92,9.41,9.41,0,0,0,2.36-6.22,6.52,6.52,0,0,0-2.15-5.25,8,8,0,0,0-5.35-1.82,12,12,0,0,0-8.15,3.21V239.25H170v55.5A72,72,0,0,1,177.71,287.46Zm-4.5-14.35a10.15,10.15,0,0,1,3.11-2.57,7.86,7.86,0,0,1,3.32-.65,4.71,4.71,0,0,1,3.32,1.29,4.2,4.2,0,0,1,1.4,3.21q0,2.58-3.54,6.43a64.32,64.32,0,0,1-7.61,7.07Z" transform="translate(0)"/><path class="sheet-Fflat" d="M177.71,275A68.74,68.74,0,0,0,186.5,267a9.41,9.41,0,0,0,2.36-6.22,6.52,6.52,0,0,0-2.15-5.25,8,8,0,0,0-5.35-1.82,12,12,0,0,0-8.15,3.21V226.75H170v55.5A72,72,0,0,1,177.71,275Zm-4.5-14.35a10.15,10.15,0,0,1,3.11-2.57,7.86,7.86,0,0,1,3.32-.65,4.71,4.71,0,0,1,3.32,1.29,4.2,4.2,0,0,1,1.4,3.21q0,2.58-3.54,6.43a64.32,64.32,0,0,1-7.61,7.07Z" transform="translate(0)"/><path class="sheet-Gflat" d="M177.71,262.46a68.74,68.74,0,0,0,8.79-7.92,9.41,9.41,0,0,0,2.36-6.22,6.52,6.52,0,0,0-2.15-5.25,8,8,0,0,0-5.35-1.82,12,12,0,0,0-8.15,3.21V214.25H170v55.5A72,72,0,0,1,177.71,262.46Zm-4.5-14.35a10.15,10.15,0,0,1,3.11-2.57,7.86,7.86,0,0,1,3.32-.65,4.71,4.71,0,0,1,3.32,1.29,4.2,4.2,0,0,1,1.4,3.21q0,2.58-3.54,6.43a64.32,64.32,0,0,1-7.61,7.07Z" transform="translate(0)"/><path class="sheet-Aflat" d="M177.71,250A68.74,68.74,0,0,0,186.5,242a9.41,9.41,0,0,0,2.36-6.22,6.52,6.52,0,0,0-2.15-5.25,8,8,0,0,0-5.35-1.82,12,12,0,0,0-8.15,3.21V201.75H170v55.5A72,72,0,0,1,177.71,250Zm-4.5-14.35a10.15,10.15,0,0,1,3.11-2.57,7.86,7.86,0,0,1,3.32-.65,4.71,4.71,0,0,1,3.32,1.29,4.2,4.2,0,0,1,1.4,3.21q0,2.58-3.54,6.43a64.32,64.32,0,0,1-7.61,7.07Z" transform="translate(0)"/><path class="sheet-Bflat" d="M177.71,237.46a68.74,68.74,0,0,0,8.79-7.92,9.41,9.41,0,0,0,2.36-6.22,6.52,6.52,0,0,0-2.15-5.25,8,8,0,0,0-5.35-1.82,12,12,0,0,0-8.15,3.21V189.25H170v55.5A72,72,0,0,1,177.71,237.46Zm-4.5-14.35a10.15,10.15,0,0,1,3.11-2.57,7.86,7.86,0,0,1,3.32-.65,4.71,4.71,0,0,1,3.32,1.29,4.2,4.2,0,0,1,1.4,3.21q0,2.58-3.54,6.43a64.32,64.32,0,0,1-7.61,7.07Z" transform="translate(0)"/></g><g><line x1="36.5" y1="180" x2="363.5" y2="180" fill="none" stroke="#000" stroke-width="5"/><line x1="36.5" y1="205" x2="363.5" y2="205" fill="none" stroke="#000" stroke-width="5"/><line x1="36.5" y1="230" x2="363.5" y2="230" fill="none" stroke="#000" stroke-width="5"/><line x1="36.5" y1="255" x2="363.5" y2="255" fill="none" stroke="#000" stroke-width="5"/><line x1="36.5" y1="280" x2="363.5" y2="280" fill="none" stroke="#000" stroke-width="5"/><path d="M115,255.07c0-10.58-7.83-24.32-26-21.26-.73-3-3.43-15.32-3.43-15.32,11.71-11.89,26.9-28.11,8-57.14-2.1-3-5.49-.55-6.19-.12-10.34,6.49-14.47,28.39-8.1,45.37-8.55,6.52-20.56,20-23.44,24.51s-6.28,16.08-1.61,26.3,15.86,21.41,30.78,20.89a46.68,46.68,0,0,0,10.2-1.39c2.21,8.61,4,15.71,4,15.71,1.24,6.28.73,16.53-14.74,18.2-7.09.53-9-3.65-9-3.68h0c6.61-.09,10.49-3.31,10.89-8.49s-5.4-8.4-9.43-8.44-10.56,3-10.53,9.65,7,15.2,17.93,14.1,17-5.12,18.35-16.22a19.79,19.79,0,0,0,0-4.1l-4-17.95C108.66,271.39,115,264.47,115,255.07ZM88.93,173.86c7.7-4.85,10.68,3.58,8,11.22S92,196.37,82.59,204.77C78.62,193.7,81.23,178.71,88.93,173.86ZM59.6,254c-.45-17.53,23.17-33.09,23.17-33.09s2.1,9.92,2.89,13.56c.06.06-6.74.79-12.23,10.31s2.25,17.41,3.85,19a19.07,19.07,0,0,0,7.31,4.13,1.32,1.32,0,0,0,1.1-2c-5.13-1.82-8.28-5.88-8.47-9.67S81,246.41,88,244.47l6.86,29.21C77.53,278.87,60.06,268.25,59.6,254Zm38.31,18.69-6.67-28.63c10.52-.09,15.13,6.27,16.4,12S106.37,268.71,97.91,272.68Z" transform="translate(0)"/><line x1="40" y1="178" x2="40" y2="282" fill="none" stroke="#000" stroke-width="7"/></g><rect width="400" height="400" fill="none"/></svg>`;
        deck.forEach(arr => {
            let [c,colourId] = arr;
            let chord = c.split('_')[0];
            let pairNr = c.split('_')[1];
            let chordName = chord.replace('-',' ');
            let type = options.mode[pairNr-1];
            let instrument = type === 'chordname' ? 'guitar' : type;
            let note = chord.split('-')[0];
            let suffix = chord.split('-')[1];
            let orderNote = orderNotes.indexOf(note);
            let orderSuffix = orderSuffixes.indexOf(suffix);
            let orderType = options.mode[0] === options.mode[1] ? pairNr : orderTypes.indexOf(type);
            let order = `${orderNote}${orderSuffix}${orderType}`;

            let card = document.createElement('DIV');
            card.dataset.chord = chord;
            card.dataset.instr = instrument;
            card.dataset.order = order;
            card.classList.add('card-container');
            card.innerHTML = `<div class="card"><div class="card-inner"><div class="card-back"></div><div class="card-front"></div></div></div>`;
            card.addEventListener('click', handleCardClick);

            let front = card.querySelector('.card-front');
            front.classList.add(`${type}`);
            if (options.colour === 'on'){
                front.classList.add(`col${colourId}`);
            }
            if (options.accs === 'flat'){
                chordName = chordName.replace('C#','Db').replace('D#','Eb').replace('F#','Gb').replace('G#','Ab').replace('A#','Bb');
                front.classList.add('flat');
            } else {
                front.classList.add('sharp');
            }

            if (type === 'guitar'){
                front.innerHTML = `${guitarSVG}<span>${chordName}</span>`;
                styleGuitarCard(front.querySelector('svg'),chord);
            } else if (type === 'piano'){
                front.innerHTML = `${pianoSVG}<span>${chordName}</span>`;
                stylePianoCard(front.querySelector('svg'),chord);
            } else if (type === 'chordname'){
                front.innerHTML = `<span>${chordName}</span>`;
            } else if (type === 'root'){
                let note = chordName.split(' ')[0][0];
                let acc = chordName.split(' ')[0][1];
                front.innerHTML = `${sheetSVG}<span>${note}${acc ? acc : ''}</span>`;
                styleSheetCard(front.querySelector('svg'),note,acc);
            }

            board.appendChild(card);
            cards.push(card);
        });
    }

    function styleGuitarCard(svg,chord){
        let fretPosArr = [23.5,81.5,138.5,191.5,242.5,291.5,337.5];
        let frets = svg.querySelectorAll('circle');
        let [key,suffix] = chord.split('-');
        let pos = fretPos[key][suffix];
        frets.forEach((f,i) => {
            if (pos[i] === -1){
                f.setAttribute('fill-opacity','0.2')
            } else {
                f.setAttribute('cx',fretPosArr[pos[i]])
            }
        })
    }

    function stylePianoCard(svg,chord){
        let [key,suffix] = chord.split('-');
        let notesArr = convertGuitarToPiano([...chords[key][suffix]]);
        notesArr.forEach(n => {
            let note = n.split('-')[0].replace('#','sharp');
            let rect = svg.querySelector(`.piano-${note}`);
            if (rect.classList.contains('white')){
                rect.setAttribute('fill','#fab')
            } else {
                rect.setAttribute('fill','#701')
            }
        })
    }

    function styleSheetCard(svg,note,acc){
        if (note==='C' || note === 'C#'){
            svg.querySelector('.c-line').classList.add('visible');
        };
        svg.querySelector(`.sheet-${note}`).classList.add('visible');
        if (acc){
            svg.querySelector(`.sheet-${note}${options.accs}`).classList.add('visible');
        }
    }

    function animatePress(el){
        el.classList.add('press');
        setTimeout(()=>{
            el.classList.remove('press');
        },300);
    }


    // ---------- DEMO SONG
    function playDemo(){
        if (timeouts.length>0){
            stopDemo();
        }
        setOptions(['root','guitar'],['major','minor','7','maj7','aug','sus4'],'sharp','on');
        board.classList.remove('sort');
        board.classList.add('demo');
        board.innerHTML = '';
        headerNewGame.classList.remove('slide-in');
        overlay.classList.remove('show');
        createBoard(true);
        let sortedPairs = cards.sort((a,b) => Number(a.dataset.order)-Number(b.dataset.order)).reduce((acc,e,i,arr)=>{
            if (i%2===0){
                let pair = Math.random()>0.5 ? [e,arr[i+1]] : [arr[i+1],e];
                acc.push(pair);
            };
            return acc;
        },[]);
        shuffle(sortedPairs);
        let pairedCards = sortedPairs.reduce((acc,e,i)=>{
            acc.push(e[0]);
            acc.push(e[1]);
            return acc;
        },[])
        let delaysFlip = [1,1.5, 3,3.5, 5,5.5, 7,7.25, 7.5,7.75, 7.9,8.15, 8.2,8.45, 8.4,8.65];
        let delaysFound = [2,2, 4,4, 6,6, 7.25,7.25, 7.75,7.75, 8.15,8.15, 8.45,8.45, 8.65,8.65];
        pairedCards.forEach((c,i) => {
            let delayFlip = delaysFlip[i];
            let delayFound = delaysFound[i];
            let chord = c.dataset.chord;
            let instrument = c.dataset.instr;
            let flipTimeout = setTimeout(()=>{
                c.classList.add('flip');
                if (i<6 && volume === 'on') playChord(instrument,chord);
            },delayFlip*1000);
            let foundTimeout = setTimeout(()=>{
                c.classList.add('found');
            },delayFound*1000);
            timeouts.push(flipTimeout);
            timeouts.push(foundTimeout);
        });
        let songTimeout = setTimeout(()=>{
            let demoSong = [
                [['A-minor','guitar'],['A-minor','root']],[['C-major','root']],[['E-aug','root']],[['A-minor','root']],
                [['E-aug','guitar'],['B-sus4','root']],[['E-aug','root']],[['C-major','root']],[['B-sus4','root']],
                [['C-major','guitar'],['C-major','root']],[['E-aug','root']],[['C-major','root']],[['C-major','guitar'],['C-major','root']],
                [['D-major','guitar'],['D-major','root']],[['F#-sus4','root']],[['D-major','root']],[['F#-sus4','root']],
                [['F-maj7','guitar'],['E-aug','root']],[['C-major','root']],[],[['C-major','root']],
                [],[['E-aug','root']],[['C-major','root']],[['A-minor','root']],
                [['G-major','guitar'],['G-major','root']],[['A-minor','guitar'],['A-minor','root']],[['A-minor','guitar'],['A-minor','root']]
            ];
            demoSong.forEach((ss,i) => {
                ss.forEach(s => {
                    if (s.length>0){
                        let chord = s[0];
                        let instr = s[1];
                        let element = document.querySelector(`.card-container[data-chord="${chord}"][data-instr="${instr}"]`);
                        let songNoteTimeout = setTimeout(()=>{
                            element.classList.add('press');
                            setTimeout(()=>{
                                element.classList.remove('press');
                            },250);
                            if (volume === 'on') {playChord(instr,chord)};
                        },i*500);
                        timeouts.push(songNoteTimeout);
                    }
                });
            })
        },10000);
        let boardTimeout = setTimeout(()=>{
            board.classList.remove('demo');
        },24000);
        timeouts.push(boardTimeout);
        timeouts.push(songTimeout);
    }

    function stopDemo(){
        board.classList.remove('demo');
        timeouts.forEach(t => clearInterval(t));
        timeouts = [];
    }


    // ---------- GAME LOGIC
    function startGame(){
        stopDemo();
        moves = [];
        gameWin = false;
        board.classList.remove('sort');
        board.innerHTML = '';
        overlay.classList.remove('show');
        headerNewGame.children[1].classList.remove('sort');
        headerNewGame.classList.remove('slide-in');
        scoreCurrent.classList.remove('fade-in');
        getOptions();
        createBoard();
    }

    function endGame(){
        gameWin = true;
        if (isMobile) {
            cards.forEach(card => card.removeEventListener('click', handleCardClick));
            cards.forEach(card => card.addEventListener('touchstart', handleCardClick));
        };
        scores.push(moves.length);
        headerNewGame.classList.add('slide-in');
        scoreCurrent.classList.add('fade-in');
        scoreCurrent.children[0].textContent = moves.length;
        scoreBest.style.opacity = '1';
        scoreBest.children[0].textContent = `${Math.min(...scores)} moves`;
    }

    function handleCardClick(){
        let chord = this.dataset.chord;
        let instrument = this.dataset.instr;
        if (this.classList.contains('flip')){
            if (volume === 'on') playChord(instrument,chord);
            if (gameWin) animatePress(this);
            return;
        }
        if (!gameWin){
            moves.push(chord);
            if (moves.length%2!==0){
                board.querySelectorAll('.card-container').forEach(c=>{
                    if (!c.classList.contains('found')) {c.classList.remove('flip')}
                });
                this.classList.add('flip');
            } else {
                this.classList.add('flip');
                if (chord === moves[moves.length-2]){
                    document.querySelectorAll('.flip').forEach(c=>c.classList.add('found'));
                };
                if (document.querySelectorAll('.found').length === 16){
                    endGame();
                }
            }
        };
        if (volume === 'on') playChord(instrument,chord);
    }

    function sortCards(){
        let cards = Array.from(board.querySelectorAll('.card-container'));
        let sortedArr = cards.map(c => c.dataset.order).sort((a,b) => Number(a)-Number(b));
        setTimeout(()=>{
            cards.forEach(c => {
                let order = sortedArr.indexOf(c.dataset.order);
                c.style.order = order;
                c.style.margin = (order+1)%4 === 0 ? '0% 0% 1% 0%' : '0% 1% 1% 0%';
            });
        },400);
    }



    function setMobile(){
        isMobile = true;
        document.removeEventListener('touchstart', setMobile);
    }

    // ---------- INIT GAME
    function addEventListeners(){
        let iconVolume = document.querySelector('#icon-volume');
        let iconControls = document.querySelector('#icon-controls');
        let inputsMode = [...document.forms[0].elements['mode-1'], ...document.forms[0].elements['mode-2']];
        let inputsSuffix = document.forms[0].elements['suffix'];
        let btnClose = document.querySelector('#btn-close');
        let btnStart = document.querySelector('#btn-start');
        let btnDemo = document.querySelector('#btn-demo');

        document.addEventListener('touchstart', setMobile)

        iconVolume.addEventListener('click', e => {
            let icon = e.target.closest('svg');
            if (icon.classList.contains('on')){
                volume = 'off';
                icon.classList.remove('on');
            } else {
                volume = 'on';
                icon.classList.add('on');
            }
        })
        iconControls.addEventListener('click', e => {
            if (!overlay.classList.contains('show')){
                overlay.classList.add('show');
            }
        });
        btnClose.addEventListener('click', e => {
            setOptions();
            overlay.classList.remove('show');
        });
        btnStart.addEventListener('click', startGame);
        headerNewGame.children[0].addEventListener('click', startGame);
        headerNewGame.children[1].addEventListener('click', function(){
            board.classList.add('sort');
            this.classList.add('sort');
            sortCards();
        });
        inputsMode.forEach(input => input.addEventListener('input', e=>{
            let [card,mode] = e.target.value.split('-');
            setPreviewLine(card,mode);
        }));
        inputsSuffix.forEach(input => input.addEventListener('input', e=>{
            let checkedSuffixes = Array.from(document.forms[0].elements['suffix']).filter(el=>el.checked);
            if (checkedSuffixes.length === 0){e.target.checked = true}
        }))
        btnDemo.addEventListener('click', playDemo)
    }

    addEventListeners();
    setOptions();
    preloadSounds();
    startGame();
})
