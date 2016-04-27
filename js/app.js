var imageArr = [];
var randomGenNumbs = [];
var clickNums = 0;
var firstPic = document.getElementById('imageFirst');
var secondPic = document.getElementById('imageSecond');
var thirdPic = document.getElementById('imageThird');

function randomNumGen(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function imageOption(name, type){
  this.name = name;
  this.type = type;
  this.path = 'images/' + this.name + this.type;
  this.imageSeen = 0;
  this.userClicks = 0;
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
new imageOption('usb', '.gif');
new imageOption('water-can', '.jpg');
new imageOption('wine-glass', '.jpg');

function randomNumGenerator(){
  for(var i = 0; i < 3; i++){
    randomGenNumbs.push(randomNumGen(0, imageArr.length));
  }
  while (randomGenNumbs[1] === randomGenNumbs[0]) {
    randomGenNumbs[1] = randomNumGen(0, imageArr.length);
  }
  while (randomGenNumbs[2] === randomGenNumbs[1] || randomGenNumbs[2] === randomGenNumbs[0]) {
    randomGenNumbs[2] = randomNumGen(0, imageArr.length);
  }
}

var firstPic = document.getElementById('imageFirst');
var secondPic = document.getElementById('imageSecond');
var thirdPic = document.getElementById('imageThird');

function imageRender(){
  randomNumGenerator();
  firstPic.src = imageArr[randomGenNumbs[0]].path;
  firstPic.id = imageArr[randomGenNumbs[0]].name;
  secondPic.src = imageArr[randomGenNumbs[1]].path;
  secondPic.id = imageArr[randomGenNumbs[1]].name;
  thirdPic.src = imageArr[randomGenNumbs[2]].path;
  thirdPic.id = imageArr[randomGenNumbs[2]].name;
  imageArr[randomGenNumbs[0]].imageSeen++;
  imageArr[randomGenNumbs[1]].imageSeen++;
  imageArr[randomGenNumbs[2]].imageSeen++;
  randomGenNumbs = [];
}
imageRender();

function clickHandler(event){
  var targetEl = event.target;
  for ( var i = 0; i < imageArr.length ; i++){
    if (imageArr[i].name === event.target.id){
      imageArr[i].userClicks++;
      clickNums ++;
    }
  }
  if(clickNums < 25){
    imageRender();
  }else if (clickNums === 25){
    document.getElementById('displated-images').style.visibility = 'hidden';
    document.getElementById('show-chart').style.visibility = 'visible';
    document.getElementById('ten-more').style.visibility = 'visible';
  }
}

function clickButtonHandler(event){
  console.log('yup');
  document.getElementById('show-chart').style.visibility = 'hidden';
  document.getElementById('ten-more').style.visibility = 'hidden';
  document.getElementById('cust-chart').style.visibility = 'hidden';
  document.getElementById('displated-images').style.visibility = 'visible';
  clickNums = 15;
}

function makeChart(){
  var names = [];
  var percents = [];
  document.getElementById('displated-images').style.visibility = 'hidden';
  document.getElementById('cust-chart').style.visibility = 'visible';
  for (var i = 0; i < imageArr.length; i++){
    names.push(imageArr[i].name);
    percents.push(imageArr[i].userClicks);
  }

  var data = {
    labels: names,
    datasets: [
      {
        data: percents,
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet',
          '#790e08',
          '#7d443d',
          '#89a5bb',
          '#ab831b',
          '#ead83c',
          '#22d7a5',
          '#760567',
          '#52f6bf',
          '#30a702',
          '#534317',
          '#cf7e0b',
          '#3017ec',
          '#4f7c9a'
        ],
        hoverBackgroundColor: [

        ]
      }]
  };

  var chosenAns = document.getElementById('cust-chart').getContext('2d');
  var myChart = new Chart(chosenAns, {
    type: 'pie',
    data: data,
    options: {
      responsive: false
    }
  });
}

var elClicko = document.getElementById('displated-images');
elClicko.addEventListener('click', clickHandler);

var butClick = document.getElementById('show-chart');
butClick.addEventListener('click', makeChart);

var butClick2 = document.getElementById('ten-more');
butClick2.addEventListener('click', clickButtonHandler);

document.getElementById('show-chart').style.visibility = 'hidden';
document.getElementById('ten-more').style.visibility = 'hidden';
