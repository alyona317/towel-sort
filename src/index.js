
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length){
    return []
  }
  else {  
    let newArr = [];
    for (let i=0; i<matrix.length; i++){
      if (i === 0 || i%2 === 0) {
        newArr.push(...matrix[i])
      }
      else {
        matrix[i].reverse();
        newArr.push(...matrix[i])
  
      }
    }
    return newArr;
  }
}
