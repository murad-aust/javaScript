//feetToMile

function feetToMile(feet) {
  if (feet < 0) {
    return "Distance cannot be negative";
  }

  else {
    var convertMile= feet/5280;
    return convertMile;

  }

}

var mile = feetToMile(150);
console.log(mile);




//woodCalculator

function woodCalculator(chair, table, bed) {

  var totalwoodrequired = chair * 1 + table * 3 + bed * 5;

  return totalwoodrequired;

}
var chair = 3;
var table = 4;
var bed = 9;

var total = woodCalculator(chair, table, bed);
console.log(total);



///BrickCalcultor

function brickCalculator(floor) {
  if (floor<=10) {

    var totalBrick= floor*1000*15;

  }
  else if (floor >10 && floor<=20) {
     var firstPortion=Math.floor(floor/10)*10;
     var seceondPortion= floor%10;
     var firstPortionTotal=15*1000*firstPortion;
     var seceondPortionTotal=12*1000*seceondPortion;
     var totalBrick = firstPortionTotal + seceondPortionTotal;
     

  }
  else {
    var thirdPortion= floor-20;
    var firstPortionTotal=15*1000*10;
    var seceondPortionTotal=12*1000*10;
    var thirdPortionTotal=10*1000*thirdPortion;
    var totalBrick = firstPortionTotal + seceondPortionTotal + thirdPortionTotal;
    

  }
  
  return totalBrick;
 
}

var totalBrickRequire= brickCalculator(45);
console.log(totalBrickRequire);




///tinyFriend

function tinyFriend(friends) {
  if(friends && friends.length)
  {
    var smallestFrind = friends[0];
    for (var i = 0; i < friends.length; i++) {
      if (smallestFrind.length > friends[i].length) {
          smallestFrind = friends[i];
      }
  
    }
    return smallestFrind;
  }
  else{
    return "Array is empty";
  }
}

var smallestFriend = tinyFriend(['sami','nasim','tonni','ani','saif']);
console.log(smallestFriend);
