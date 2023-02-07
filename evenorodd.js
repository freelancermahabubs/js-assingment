function evenOdd(string ) {
  if(typeof string  !== 'string'){
    return "Please Provide Valid Text...!"
  }
  return string .length % 2 === 0 ? 'even' : 'odd';
}
console.log(evenOdd('Phero'));
