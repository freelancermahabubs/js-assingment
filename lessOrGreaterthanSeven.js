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
console.log(isLGSeven(6));