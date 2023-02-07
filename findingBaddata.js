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

const data =   [ -4, -9, -5, -33, -55 ];
console.log(findingBadData(data));