
function mindGame(num) {
  if(typeof num !== 'number'){
    return "Please Provide Valid Number...!"
  }
  return ((num * 3 + 10) / 2 - 5);
}

console.log(mindGame(33));



