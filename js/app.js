var imageArr = [];
var randomNumGenArr = [];
var clickNums = 0;
var firstPic = document.getElementById('image-first');
var secondPic = document.getElementById('image-second');
var thirdPic = document.getElementById('image-third');

function randomNumGen(min,max){
  var rando = Math.floor(Math.random() * (max - min)) + min;
  return rando;
}

function imageOption(name, type, path,numTimesDisplayed,numTimesClicked){
  this.name = name;
  this.type = type;
  this.path = 'images/' + this.name + this.type;
  this.imageSeen = imageSeen;
  this.userClicks = userClicks;
  imageArr.push(this);
}

new imageOption('bag', '.jpg');
new imageOption('banana', '.jpg');
new imageOption('bathroom', '.jpg');
new imageOption('boots', '.jpg');
new imageOption('breakfast', '.jpg');
new imageOption('bubblegum', '.jpg');
new imageOption('chair', '.jpg');
new imageOption('cthulhu', '.jpg');
new imageOption('dog-duck', '.jpg');
new imageOption('dragon', '.jpg');
new imageOption('pen', '.jpg');
new imageOption('pet-sweep', '.jpg');
new imageOption('scissors', '.jpg');
new imageOption('shark', '.jpg');
new imageOption('sweep', '.png');
new imageOption('tauntaun', '.jpg');
new imageOption('unicorn', '.jpg');
new imageOption('usb', '.jpg');
new imageOption('water-can', '.jpg');
new imageOption('wine-glass', '.jpg');
