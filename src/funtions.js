function getLength(str){
  console.log(str)
  return str.length
}

function adds(a, b) {
  if(typeof a === 'number' && typeof b === 'number') return a + b;
  return 'error'
}

module.exports = {adds, getLength};