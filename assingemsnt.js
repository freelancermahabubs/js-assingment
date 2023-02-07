function mindGame(num) {
  if(typeof num !== 'number'){
    return "Please Provide Valid Number...!"
  }
  return ((num * 3 + 10) / 2 - 5);
}


function evenOdd(string ) {
  if(typeof string  !== 'string'){
    return "Please Provide Valid Text...!"
  }
  return string .length % 2 === 0 ? 'even' : 'odd';
}


function isLGSeven(number) {
  if(typeof number !== 'number'){
    return "Please Provide Valid Number...!"
  }
  let difference = number - 7;
  if (difference < 0) {
    return difference;
  } else {
    return number * 2;
  }
}


function findingBadData(array) {

  if (typeof array !== 'object' || !Array.isArray(array)) {
    return "Please Provide a Valid Array...!";
  }

  let count = 0;

  for (let i = 0; i < array .length; i++) {
    if (array[i] < 0) {
      console.log("Bad Data")
      count++;
    }
    else{
      console.log("Good Data")
    }
  }
  return count;
}




function gemsToDiamond(gems1, gems2, gems3) {
  if (typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number') {
    return "Please provide a valid number";
  }
  const totalDiamond = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
  return totalDiamond > 2000 ? totalDiamond - 2000 : totalDiamond;
}
