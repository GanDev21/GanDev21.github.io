function drawPixel(ctx, x, y, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.rect(x, y, 1, 1);
  ctx.fill();
}

function capNum(a, b) {return a > b ? b : Math.floor(a);}
function toHex(a) {return (capNum(a, 255) + 256).toString(16).slice(1);}
function RGB(c) {return "#" + toHex(c[0]) + toHex(c[1]) + toHex(c[2]);}

const kolorz = [
  [8, 0, 2],
  [8, 5, 1],
  [8, 8, 0],
  [0, 7, 1],
  [2, 2, 8],
  [5, 0, 5]
];

function blankCanvas(x, y) {
  let c = document.createElement("canvas");
  c.width = x;
  c.height = y;
  return c;
}

function getCanvas(id) {return document.querySelector("#" + id + " canvas");}
function getCtx(id) {return getCanvas(id).getContext("2d");}
function clearCanvas(id) {getCtx(id).clearRect(0, 0, getCanvas(id).width, getCanvas(id).height);}

const blokSprite = new Array(kolorz.length).fill().map(() => blankCanvas(32, 32));
const gostSprite = new Array(kolorz.length).fill().map(() => blankCanvas(32, 32));
const gridCanvas = blankCanvas(320, 640);

function drawSprite(ctx, pack, k, x, y) {ctx.drawImage(pack[k], 32 * x, 32 * y);}
function drawRekt(ctx, style, opacity, x, y) {
  ctx.beginPath();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = style;
  ctx.rect(32 * Math.max(x, 0), 32 * y, x < 0 ? 320 : 32, 32);
  ctx.fill();
  ctx.globalAlpha = 1.0;
}

//audiostuff:

var melody = [
  [7 - 24, 0, 1000 - 50],
  [7, 0, 500 - 50],
  [2, 500, 250 - 25],
  [3, 750, 250 - 25],
  [7 - 24, 1000, 1000 - 50],
  [5, 1000, 500 - 50],
  [3, 1500, 250 - 25],
  [2, 1750, 250 - 25],
  
  [- 12, 2000, 1000 - 50],
  [0, 2000, 500 - 50],
  [0, 2500, 250 - 25],
  [3, 2750, 250 - 25],
  [- 12, 3000, 1000 - 50],
  [7, 3000, 500 - 50],
  [5, 3500, 250 - 25],
  [3, 3750, 250 - 25],

  [7 - 12, 4000, 1000 - 50],
  [2, 4000, 500 - 50],
  [2, 4500, 250 - 25],
  [3, 4750, 250 - 25],
  [7 - 12, 5000, 1000 - 50],
  [5, 5000, 500 - 50],
  [7, 5500, 500 - 50],
  
  [- 12, 6000, 1000 - 50],
  [3, 6000, 500 - 50],
  [0, 6500, 500 - 50],
  [- 12, 7000, 250 - 25],
  [0, 7000, 1000 - 50],
  [- 12, 7250, 250 - 25],
  [2 - 12, 7500, 250 - 25],
  [3 - 12, 7750, 250 - 25],



  [5 - 12, 8000, 1000 - 50],
  [5, 8000, 500 - 50],
  [5, 8500, 250 - 25],
  [8, 8750, 250 - 25],
  [5 - 12, 9000, 1000 - 50],
  [12, 9000, 500 - 50],
  [10, 9500, 250 - 25],
  [8, 9750, 250 - 25],
  
  [3 - 12, 10000, 1000 - 50],
  [7, 10000, 500 - 50],
  [7, 10500, 250 - 25],
  [3, 10750, 250 - 25],
  [3 - 12, 11000, 1000 - 50],
  [7, 11000, 500 - 50],
  [5, 11500, 250 - 25],
  [3, 11750, 250 - 25],

  [7 - 24, 12000, 1000 - 50],
  [2, 12000, 500 - 50],
  [2, 12500, 250 - 25],
  [3, 12750, 250 - 25],
  [7 - 24, 13000, 1000 - 50],
  [5, 13000, 500 - 50],
  [7, 13500, 500 - 50],
  
  [- 12, 14000, 1000 - 50],   
  [3, 14000, 500 - 50],
  [0, 14500, 500 - 50],
  [- 12, 15000, 250 - 25],
  [0, 15000, 1000 - 50],
  [- 12, 15250, 250 - 25],
  [10 - 24, 15500, 250 - 25],
  [7 - 24, 15750, 250 - 25],
];

var aCtx = new AudioContext();
var masterGain = aCtx.createGain();
var musicGain = aCtx.createGain();
var sfxGain = aCtx.createGain();
var sfx2Gain = aCtx.createGain();
masterGain.connect(aCtx.destination);
musicGain.connect(masterGain);
sfxGain.connect(masterGain);
sfx2Gain.connect(sfxGain);
sfx2Gain.gain.value = 0.2;

function setGains() {
  masterGain.gain.value = soundOn * document.getElementById("masterVolume").value / 10;
  musicGain.gain.value = document.getElementById("musicVolume").value / 10;
  sfxGain.gain.value = document.getElementById("sfxVolume").value / 10;
}

function playNote(node, note, time) {
  let osc = aCtx.createOscillator();
  osc.frequency.value = 440 * Math.pow(2, note / 12);
  osc.connect(node);
  osc.start();
  setTimeout(function(){
    osc.stop();
  osc = null;
  }, time);
}

function playMelody(speed) {
  let now = Date.now();
  for (let note of melody) setTimeout (function () {
    playNote(musicGain, note[0], note[2] / speed);
  }, note[1] / speed - (Date.now() - now));
}

function melodyLoop(speed) {
  playMelody(speed);
  setInterval(function() {playMelody(speed);}, 16000 / speed);
}

//end audiostuff

var soundOn = false, skOn = true;
var gameOn = false, paused = false;
var game;

function init() {
  function pluspt(x) {return x > 0 ? x : 0;}
  console.log("init");
  document.getElementById("mp-main").click();
  document.addEventListener('fullscreenchange', correctFullscreen);
  setTimeout(correctFullscreen, 100);

  let ctx = getCtx("game");

  for (e of document.querySelectorAll("[type=range]")) e.addEventListener('input', applyRangeSliders);
  applyRangeSliders();

  const bw = 8;
  const g1 = 4;
  const g2 = 7;
  for (k = 0; k < kolorz.length; k++) {
    let ctxB = blokSprite[k].getContext("2d");
    let ctxG = gostSprite[k].getContext("2d");

    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++){
      let lit = 24 + pluspt(bw - x) + pluspt(bw - y) - pluspt(x + bw - 31) - pluspt(y + bw - 32); 
      drawPixel(ctxB, x, y, RGB(kolorz[k].map(c => c * lit)));
      if ((x >= g1) && (x < 32 - g1) && (((y >= g1) && (y <= g2)) || ((y <= 31 - g1) && (y >= 31 - g2))) || 
      	  (y >= g1) && (y < 32 - g1) && (((x >= g1) && (x <= g2)) || ((x <= 31 - g1) && (x >= 31 - g2)))) 
      	  drawPixel(ctxG, x, y, RGB(kolorz[k].map(c => c * lit * 0.75)));
    }
  }
  let gridComponent = blankCanvas(32, 32);
  let gridComponentCtx = gridComponent.getContext("2d");
  for (let n = 0; n < 32; n++) {
    let klr = 3 * (n < 16 ? n : 31 - n) + 8;
    klr = RGB([klr, klr, klr]);//"#333";
    drawPixel(gridComponentCtx, n, 0, klr);
    drawPixel(gridComponentCtx, 0, n, klr);
    drawPixel(gridComponentCtx, n, 31, klr);
    drawPixel(gridComponentCtx, 31, n, klr);
  }
  for (let y = 0; y < 20; y++) for (let x = 0; x < 10; x++) gridCanvas.getContext("2d").drawImage(gridComponent, 32 * x, 32 * y);


  //for (let y = 5; y < 15; y ++) for (let x = 0; x < 10; x ++) drawSprite(ctx, y == 9 ? gostSprite : blokSprite, (x + y + 1) % 6, x, y);
  //for (let y = 0; y < 2; y ++) for (let x = 0; x < 2; x ++) drawSprite(getCtx("hold"), blokSprite, 0, x + 3/2, y + 3/2);
  ctx.drawImage(gridCanvas, 0, 0);

  setGains();
  melodyLoop(1.5);
}

function toggleSound() {
  soundOn = !soundOn;
  document.getElementById("soundON").style.display = !soundOn ? "none" : null;
  document.getElementById("soundOFF").style.display = soundOn ? "none" : null;
  document.getElementById("soundspan").className = soundOn ? "spanON" : "spanOFF";
  document.getElementById("soundspan").innerText = soundOn ? "ON" : "OFF";
  setGains();
}

function applyRangeSliders() {
  for (e of ["master", "sfx", "music"]) 
    document.getElementById(e + "VolumeSpan").innerText = 
      (10 * document.getElementById(e + "Volume").value) + "%";
  document.getElementById("chillSpeedSpan").innerText =
    document.getElementById("chillSpeed").value;
}

function correctOptionsBack() {
  document.getElementById("back2menu").style.display = !gameOn ? null : "none";
  document.getElementById("back2pause").style.display = gameOn ? null : "none";
}

function goFullscreen(){
  let e = document.body;
  if (e.requestFullscreen) {
    e.requestFullscreen();
  } else if (e.mozRequestFullScreen) { /* Firefox */
    e.mozRequestFullScreen();
  } else if (e.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    e.webkitRequestFullscreen();
  } else if (e.msRequestFullscreen) { /* IE/Edge */
    e.msRequestFullscreen();
  }
}
function endFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function toggleFullscreen () {
  if (document.fullscreenElement) endFullscreen();
  else goFullscreen();
}

function correctFullscreen() {
  let fs = !!document.fullscreenElement;
  for (span of document.getElementsByClassName("fullscreentoggle")) {
    span.innerText = fs ? "ON" : "OFF";
    span.classList.add(fs ? "spanON" : "spanOFF");
    span.classList.remove(fs ? "spanOFF" : "spanON");
  }
}

function toggleScreenkeys() {
  skOn = !skOn;
  document.getElementById("screenkeys").style.display = skOn ? null : "none";
  document.getElementById("skspan").className = skOn ? "spanON" : "spanOFF";
  document.getElementById("skspan").innerText = skOn ? "ON" : "OFF";
}

function updateInfo(n, i) {for (e of document.getElementsByClassName(n + "-info")) e.innerText = i;}

function startNewGame(gameType) {
  if (gameType == 0) console.log("Started chill game...");
  if (gameType == 1) console.log("Started classic game!");
  paused = false;
  game = new Game(gameType);
  gameOn = true;
  correctOptionsBack();
}

function togglePause() {
  if (gameOn) paused = !paused;
  if (paused) {
    document.getElementById("mp-pause").click();
    game.pause();
  }
  else {
    document.getElementById("mp-none").click();
    game.unpause();
  }
}

function doGameOver() {
  endGame();
  document.getElementById("mp-over").click();
}

function endGame() {
  gameOn = false;
  correctOptionsBack();
}


//REAL DEAL STARTS HERE, I guess...:


/*********************************\
**** Useful 2d array functions ****
\*********************************/
//return copied 2d array:
function copy2d(arr){return [...arr].map(a => [...a]);}

//return longest x length:
function xLen(arr) {return arr.reduce((x, a) => Math.max(x, a.length), 0);}

//return transposed (swap x and y):
function arrxy(arr){ 
  arr2 = Array(xLen(arr)).fill([]).map(() => []);
  for (let x = 0; x < arr2.length; x++)
    for (let y = 0; y < arr.length; y++)
      arr2[x][y] = arr[y][x];
  return arr2;
}

//return n times rotated (0, 1, 2 and 3 make sense)
function arrnrot(arr, n){
  res = copy2d(arr);
  for (nn = 0; nn < n; nn++) res = arrxy(arr).reverse();
  return res;
}

function filled2D(xsize, ysize, fill) {
  return new Array(ysize).fill().map(() => new Array(xsize).fill(fill));
}

/****************************************\
**** END OF Useful 2d array functions ****
\****************************************/

function RPG() { //Random Piece Generator (returns function)
  let allPieces = [
    [[1, 1], [1, 1]],  
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 0], [0, 1, 1]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]],
    [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]
  ];
  let ptypes = allPieces.length;
  let dontUse = 3, mustUse = ptypes * 2;

  //static variables:
  let lastUsed = new Array(ptypes).fill(0);
  let everUsed = new Array(ptypes).fill(false);
  let color = -1;

  return function() {
    color++; color %= kolorz.length;

    let canUse = [];
    for (let n = 0; n < ptypes; n++) if (lastUsed[n] >= mustUse) canUse.push(n);
    if (canUse.length == 0) for (let n = 0; n < ptypes; n++) if (!everUsed[n] || (lastUsed[n] >= dontUse)) canUse.push(n);
    let pid = canUse[Math.floor(Math.random() * canUse.length)];

    everUsed[pid] = true;
    lastUsed = lastUsed.map(x => x + 1);
    lastUsed[pid] = 0;
    return arrnrot(allPieces[pid], Math.floor(Math.random() * 4))
      .map(a => a.map(x => (x != 0) ? color + 1 : 0));
  };
}

function drawPiece(ctx, pack, piece, px, py) {
  for (y = 0; y < piece.length; y++) for (x = 0; x < piece[y].length; x++)
    if (piece[y][x] != 0) 
      drawSprite(ctx, pack, piece[y][x] - 1, x + px, y + py);
}

function isColliding(field, piece, ox, oy) {
  let lenfx = xLen(field), lenfy = field.length, lenpx = xLen(piece), lenpy = piece.length;
  for (let y = 0; y < lenpy; y++) for (let x = 0; x < lenpx; x++) if (piece[y][x] > 0) {
  	let fx = x + ox, fy = y + oy;
    if ((fx < 0) || (fx >= lenfx) || (fy >= lenfy) || ((fy >= 0) && (field[fy][fx] > 0))) return true;
  }
  return false;
}

function putPiece(field, piece, ox, oy) {
  let gameOk = true;
  for (let y = 0; y < piece.length; y++) for (x = 0; x < piece[y].length; x++) if (piece[y][x] != 0) {
    if (oy + y >= 0) field[oy + y][ox + x] = piece[y][x];
    else gameOk = false;
  }
  return gameOk;
}

function getId(e, nMax) {
  let id = e.id;
  if (!id) for (let n = 0; n < nMax; n++) {
    e = e.parentElement;
    if (e) id = e.id;
    else return "";
    if (id != "") return id;
  }
}

function GameInput() {
  const sKeyIds = ["hold", "keyLRot", "keyRRot", "keyLeft", "keyRight", "keyDown", "keyDDown"];
  let sKeys;
  function sKeysClear() {sKeys = Array(sKeyIds.length).fill(false);}
  sKeysClear();
  let sKeysPrev = [...sKeys];


  function SKS(idString, justDown) { //Screen Key Status
    let id = sKeyIds.indexOf(idString);
    if (id >= 0) return sKeys[id] && !(justDown && sKeysPrev[id]);
    return false;
  }

  //Screen Key Index (for a given element or its parent^n):
  function SKI(e) {return sKeyIds.indexOf(getId(e, 4));}

  this.purge = function() {
    this.x = 0;
    this.d = 0;
    this.dd = 0;
    this.r = 0;
    this.hold = 0;
  };
  this.update = function() {
    this.x = (keys[39] || SKS("keyRight", false)) - (keys[37] || SKS("keyLeft", false));
    this.d = keys[40] || SKS("keyDown", false);
    this.dd = keydowns[32] || SKS("keyDDown", true); //space
    this.r = keydowns[38] || SKS("keyLRot", true) || SKS("keyRRot", true); //up
    this.hold = keydowns[72] || SKS("hold", false); //h
    sKeysPrev = [...sKeys];
  }
  function doTouch(e) {
    sKeysClear();
    for (let n = 0; n < e.touches.length; n++) {
      let event = e.touches.item(n); // e.touches.item(n).target    //
      let id = SKI(document.elementFromPoint(event.clientX, event.clientY)); 
      //sKeyIds.indexOf(getId(document.elementFromPoint(event.clientX, event.clientY), 4));
      if (id >= 0) sKeys[id] = true;
    }
  }
  function doMousedown(e) {
    let id = SKI(e.target);
    if (id >= 0) sKeys[id] = true;
  }
  this.purge();
  document.ontouchmove = doTouch;
  document.ontouchstart = doTouch;
  document.ontouchend = doTouch;
  document.onmousedown = doMousedown;
  document.onmouseup = sKeysClear;
}

//THE GAME THE GAME THE GAME THE GAME THE GAME THE GAME
//THE GAME THE GAME THE GAME THE GAME THE GAME THE GAME
//THE GAME THE GAME THE GAME THE GAME THE GAME THE GAME

function Game(isClassic) {
  this.input = new GameInput();//{x: 0, d: 0, dd: 0, r: 0};

  let lastX = 0;
  let lastXTime = 0;
  let lastY = 0;

  let score = 0;
  let level = isClassic ? 1 : document.getElementById("chillSpeed").value;
  let lineCount = 0;

  let field = filled2D(10, 20, 0);
  let currentPiece = false;
  let px, py;

  let linelife = 0;
  let lines = [];
  let trailField = filled2D(10, 20, false);
  const maxTrailLife = 32;
  function makeTrail() {
    for (let y = 0; y < currentPiece.length; y++) if (y + py >= 0)
      for (x = 0; x < currentPiece[y].length; x++) 
        if (currentPiece[y][x] != 0) 
          trailField[y + py][x + px] = {
            color: RGB(kolorz[currentPiece[y][x] - 1].map(x => 20 * x)),
            life: maxTrailLife
          };
  }

  let holdPiece = false; //array2D(4, 4);
  let holdUsed = false;

  let loop;
  this.pause = function() {clearInterval(loop);};
  this.unpause = function () {loop = setInterval(mainLoop, 30);};
  this.unpause();

  let newPiece = RPG();

  let nextPieces = new Array(3).fill().map(() => newPiece());

  function ytimeMax() {return 20 - level;}
  function unitLL() {return 8;}

  function analyzeField() {
    lines = [];
    for (let y = 0; y < field.length; y++) {
      let lineFull = true;
      for (let x = 0; x < field[y].length; x++) if (field[y][x] == 0) {
        lineFull = false;
        break;
      }
      if (lineFull) lines.push(y);
    }
    if (lines.length > 0) {
      score += 100 * lines.length * lines.length;
      lineCount += lines.length;
      if (isClassic) level = Math.min(15, 1 + Math.floor(lineCount / 5));
      linelife = unitLL() * lines.length;
    }

  }
  function pushNewPiece() {
    currentPiece = nextPieces.shift();
    nextPieces.push(newPiece());
  }
  function placeNewPiece() {
    px = Math.floor(Math.random() * (10 - xLen(currentPiece) - 5)) + 3;
    py = -currentPiece.length;
    holdUsed = false;
  }
  let ytime = 0;

  this.movePiece = function() {
    if (!currentPiece) {
      pushNewPiece();
      placeNewPiece();
    }

    if (this.input.hold && !holdUsed) {
      let holdPieceCopy = holdPiece;
      holdPiece = currentPiece;
      if (holdPieceCopy == false) pushNewPiece();
      else currentPiece = holdPieceCopy;
      placeNewPiece();
      holdUsed = true;
      ytime = 0;
    }

    if (this.input.x == lastX) lastXTime++;
    else lastXTime = 0;
    lastX = this.input.x;
    if (isKeyTime(lastXTime, 4, 1)) 
      if (!isColliding(field, currentPiece, px + this.input.x, py)) 
        px += this.input.x;//moveX(this.input.x); 

    if (this.input.r) {
      let testPiece = arrnrot(currentPiece, 1);
      for(let i = 1; i < 2 + 2 * Math.floor(currentPiece.length / 2); i++){
        let dx = Math.floor(i / 2) * (2 * (i % 2) - 1);
        if (!isColliding(field, testPiece, px + dx, py)) {
          px += dx;
          currentPiece = testPiece;
          break;
        }
      }
    };

    if (this.input.dd){
      while (!isColliding(field, currentPiece, px, py + 1)) {
        makeTrail();
        py++
        score += 2;
        playNote(sfx2Gain, -18, 100);
      }
      makeTrail();
      ytime = ytimeMax();
    }

    if (this.input.d) {
      makeTrail();
      if (!lastY) ytime = ytimeMax();
    }
    lastY = this.input.d;

    ytime++;
    if (ytime >= (this.input.d ? 1 : ytimeMax())) {
      ytime = 0;
      score += this.input.d;
      if (!isColliding(field, currentPiece, px, py + 1)) py++;
      else {
        if (putPiece(field, currentPiece, px, py)) {
          currentPiece = false;
          analyzeField();
          this.drawNext();
          playNote(sfxGain, -14, 50);
        }
        else {
          this.pause();
          doGameOver();
        }
      } 
    }
  }

  this.update = function() {
    if (linelife > 0) {
      if (linelife % unitLL() == 0) playNote(sfxGain, 15, 100);
      if (linelife-- == 1) 
        field = filled2D(10, lines.length, 0).concat(field.filter((e, i) => lines.indexOf(i) == -1));
    }
    else this.movePiece();

    for (y = 0; y < trailField.length; y++) for (x = 0; x < trailField[y].length; x++) 
      if ((trailField[y][x]) && (trailField[y][x].life-- == 1)) trailField[y][x] = false;
    
    this.input.purge();
  };

  //drawing:
  this.drawNext = function() {
  	clearCanvas("next");
  	if (nextPieces) for (let n = 0; n < 3; n++) if (nextPieces[n])
  	  drawPiece(getCtx("next"), blokSprite, nextPieces[n], (xLen(nextPieces[n]) < 3) + (1 / 2), (5 * n) + (nextPieces[n].length < 3) + (1 / 2));
  };
  this.drawHold = function() {
  	clearCanvas("hold");
    if (holdPiece) drawPiece(getCtx("hold"), blokSprite, holdPiece, (xLen(holdPiece) < 3) + (1 / 2), (holdPiece.length < 3) + (1 / 2));
  };
  this.drawGame = function() {
    updateInfo("score", score);
    updateInfo("level", level);
    updateInfo("lines", lineCount);

    clearCanvas("game");
    let gameCtx = getCtx("game");
    gameCtx.drawImage(gridCanvas, 0, 0);


    for (y = 0; y < trailField.length; y++) for (x = 0; x < trailField[y].length; x++){
      let trail = trailField[y][x];
      if (trail) drawRekt(gameCtx, trail.color, trail.life / maxTrailLife, x, y);
    }

    if (currentPiece) {
      for (let dy = 0; dy <= field.length - py; dy++) if (isColliding(field, currentPiece, px, py + dy + 1)) {
        drawPiece(gameCtx, gostSprite, currentPiece, px, py + dy);
        break;
      }
      drawPiece(gameCtx, blokSprite, currentPiece, px, py);
    }
    drawPiece(gameCtx, blokSprite, field, 0, 0);
    if (linelife > 0) for (const y of lines) {
      drawRekt(gameCtx, "#fff", 1 - Math.abs((2 * linelife / unitLL()) % 2 - 1), -1, y);
    }
  };

  this.drawAll = function() {
    this.drawGame();
    this.drawNext();
    this.drawHold();
  };
  this.drawAll();
}

function isKeyTime(time, a, b) {
  return (time == 0) || ((time >= a) && ((time - a) % b == 0));
}

function doKeys(e) {
  keydowns[e.keyCode] = ((e.type == "keydown") && (keys[e.keyCode] == 0)) ? 1 : 0;
  keys[e.keyCode] = (e.type == "keydown") ? 1 : 0;
  if ((e.type == "keydown") && ((e.keyCode == 27) || (e.keyCode == 80))) togglePause();
}
function clearKeydowns() {keydowns = Array(255).fill(0);}
var keys = Array(255).fill(0);
var keydowns = Array(255).fill(0);
window.addEventListener("keyup", doKeys);
window.addEventListener("keydown", doKeys);

function mainLoop() {
  game.input.update();
  game.update();
  game.drawAll();
  clearKeydowns();
}