let aries = {name:"aries", date: "mar 20 – apr 19", sign: "fire sign", characteristics: "passionate, motivated, confident, competitive"}
let taurus = {name:"taurus", date: "apr 20 – may 20", sign: "earth sign", characteristics: "strong, dependable, sensual, creative"}
let gemini = {name:"gemini", date: "may 21 – jun 20", sign: "air sign", characteristics: "expressive, versatile, curious, indecisiveness"}
let cancer = {name:"cancer", date: "jun 21 – jul 22", sign: "water sign", characteristics: "temperamental, sensitive, compassionate, loving"}
let leo = {name:"leo", date: "jul 23 – aug 22", sign: "fire sign", characteristics: "self-assured, dramatic, outgoing, fiery"}
let virgo = {name:"virgo", date: "aug 23 – sep 22", sign: "earth sign", characteristics: "organized, practical, analytical, humble"}
let libra = {name:"libra", date: "sep 23 – oct 22", sign: "air sign", characteristics: "extroverted, friendly, diplomatic, fair-minded"}
let scorpio = {name:"scorpio", date: "oct 23 – nov 21", sign: "water sign", characteristics: "passionate, stubborn, smart, stoic"}
let sagittarius = {name:"sagittarius", date: "nov 22 – dec 21", sign: "fire sign", characteristics: "assertive, optmistic, compassionate, loyal"}
let capricorn = {name:"capricorn", date: "dec 22 – jan 19", sign: "earth sign", characteristics: "ambitious, independent, tenacious, persistent"}
let aquarius = {name:"aquarius", date: "jan 20 – feb 18", sign: "air sign", characteristics: "free-spirited, eccentric, non-conformist, imaginative"}
let pisces = {name:"pisces", date: "feb 19 – mar 19", sign: "water sign", characteristics: "emotionally sensitive, empathetic, creative, gracious"}

function preload(){
  ariesImg = loadImage ('aries.png')
  taurusImg = loadImage ('taurus.png')
  geminiImg = loadImage ('gemini.png')
  cancerImg = loadImage ('cancer.png')
  leoImg = loadImage ('leo.png')
  virgoImg = loadImage ('virgo.png')
  libraImg = loadImage ('libra.png')
  scorpioImg = loadImage ('scorpio.png')
  sagittariusImg = loadImage ('sagittarius.png')
  capricornImg = loadImage ('capricorn.png')
  aquariusImg = loadImage ('aquarius.png')
  piscesImg = loadImage ('pisces.png')
}

function setup() {
  createCanvas(400, 450);
  background('#f5e1fd')
  textFont ('Helvetica')
  textStyle (BOLDITALIC)
  textSize (20)
  textWrap(WORD,400,400)
  fill ('purple')
  text("Welcome! Enter your star sign", 48, 50)
  text("for a cute illustration :)", 80, 74)
  textStyle (ITALIC)
  textSize (12)
  text("*please type in",252,100)
  text(" lower case",252,113)
  
  let input = createInput('');
  input.position(140, 90);
  input.size(100,20);
  input.style('font-size', '14px', 'color', '#ffffff');
  input.input(myInputEvent);
  
  textSize (16)
  textStyle (ITALIC)
  text("or",184,134)
  
  button = createButton(" i don't know my sign :/ ");
  button.style('font-size', '12px');
  button.style('background-color', 'purple');
  button.style('color','white');
  button.position(128,143);
  button.mousePressed(monthList)
}


function myInputEvent() {
  textAlign (CENTER)
  let r = "reload to see others! :D"
  let lineSpacing = 16
  if (this.value() == "aries"){
  textStyle(BOLDITALIC)
    fill('#d36592')
   text(aries.name,195,190)
    image(ariesImg, 100, 165, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(aries.date,195,360)
    text(aries.sign,195,360+lineSpacing)
    text(aries.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
 }
  else if (this.value() == "taurus"){
    textStyle(BOLDITALIC)
    fill('#537230')
   text(taurus.name,195,190)
    image(taurusImg, 100, 165, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(taurus.date,195,360)
    text(taurus.sign,195,360+lineSpacing)
    text(taurus.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
   else if (this.value() == "gemini"){
    textStyle(BOLDITALIC)
    fill('#ca5d6a')
   text(gemini.name,195,190)
    image(geminiImg, 130, 195, 150, 150)
    textStyle(ITALIC)
    textSize (14)
    text(gemini.date,195,360)
    text(gemini.sign,195,360+lineSpacing)
    text(gemini.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "cancer"){
    textStyle(BOLDITALIC)
    fill('#ff7867')
   text(cancer.name,195,190)
    image(cancerImg, 100, 175, 195, 195)
    textStyle(ITALIC)
    textSize (14)
    text(cancer.date,195,360)
    text(cancer.sign,195,360+lineSpacing)
    text(cancer.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "leo"){
    textStyle(BOLDITALIC)
    fill('#88582e')
   text(leo.name,195,190)
    image(leoImg, 100, 175, 195, 195)
    textStyle(ITALIC)
    textSize (14)
    text(leo.date,195,360)
    text(leo.sign,195,360+lineSpacing)
    text(leo.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "virgo"){
    textStyle(BOLDITALIC)
    fill('#f657ff')
   text(virgo.name,195,190)
    image(virgoImg, 100, 165, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(virgo.date,195,360)
    text(virgo.sign,195,360+lineSpacing)
    text(virgo.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "libra"){
    textStyle(BOLDITALIC)
    fill('#9d3b9a')
   text(libra.name,195,190)
    image(libraImg, 100, 165, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(libra.date,195,360)
    text(libra.sign,195,360+lineSpacing)
    text(libra.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "scorpio"){
    textStyle(BOLDITALIC)
    fill('#272727')
   text(scorpio.name,195,190)
    image(scorpioImg, 100, 175, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(scorpio.date,195,360)
    text(scorpio.sign,195,360+lineSpacing)
    text(scorpio.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "sagittarius"){
    textStyle(BOLDITALIC)
    fill('#845b76')
   text(sagittarius.name,195,190)
    image(sagittariusImg, 100, 165, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(sagittarius.date,195,360)
    text(sagittarius.sign,195,360+lineSpacing)
    text(sagittarius.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "capricorn"){
    textStyle(BOLDITALIC)
    fill('#616346')
   text(capricorn.name,195,190)
    image(capricornImg, 100, 170, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(capricorn.date,195,360)
    text(capricorn.sign,195,360+lineSpacing)
    text(capricorn.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "aquarius"){
    textStyle(BOLDITALIC)
    fill('#fe1c88')
   text(aquarius.name,195,190)
    image(aquariusImg, 100, 165, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(aquarius.date,195,360)
    text(aquarius.sign,195,360+lineSpacing)
    text(aquarius.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
  else if (this.value() == "pisces"){
    textStyle(BOLDITALIC)
    fill('#2c4984')
   text(pisces.name,195,190)
    image(piscesImg, 100, 175, 200, 200)
    textStyle(ITALIC)
    textSize (14)
    text(pisces.date,195,360)
    text(pisces.sign,195,360+lineSpacing)
    text(pisces.characteristics,195,360+2*lineSpacing)
    fill('purple')
    textSize (12)
    text(r,195,430)
  }
}


function monthList() {
  let space = ":  "
  let myFontSize = 14
  textAlign (CENTER)
  textSize (13)
  text(aries.name + space + aries.date,195,185)
  text(taurus.name + space + taurus.date,195,185+myFontSize)
  text (gemini.name + space + gemini.date, 195,185+2*myFontSize)
  text (cancer.name + space + cancer.date, 195,185+3*myFontSize)
  text (leo.name + space + leo.date, 195,185+4*myFontSize)
  text (virgo.name + space + virgo.date, 195,185+5*myFontSize)
  text (libra.name + space + libra.date, 195,185+6*myFontSize)
  text (scorpio.name + space + scorpio.date, 195,185+7*myFontSize)
  text (sagittarius.name + space + sagittarius.date, 195,185+8*myFontSize)
  text (capricorn.name + space + capricorn.date, 195,185+9*myFontSize)
  text (aquarius.name + space + aquarius.date, 195,185+10*myFontSize)
  text (pisces.name + space + pisces.date, 195,185+11*myFontSize)
  textStyle (BOLDITALIC)
  text ("find your sign, reload, and type away!", 200, 370)
}