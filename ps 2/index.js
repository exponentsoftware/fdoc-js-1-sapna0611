// question 2.b.
var arr = [];
while (arr.length < 7){
  var a = Math.floor(Math.random()*10)+1;
  if(arr.indexOf(a) === -1)arr.push(a);
}
console.log(arr);

//question 2.a.
var result = "#"
while(result.length <=7 ){
console.log(result);
result = result + "#";
}

// question 2.c.

var myArray = [ 'A', 'B', 'C'];
var revMyArr = [].concat(myArray).reverse();
console.log(revMyArr);

//question 2.d.


Array.prototype.unique = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr; 
}

const arrOne = [1,4,6,2,1];
const uniqueArr = arrOne.unique()
console.log(checkUniqueness(arrOne));



//

Array.prototype.unique = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr; 
}

const arrTwo = [1,4,6,2,3];
const uniqueArr = arrTwo.unique()
console.log(checkUniqueness (arrTwo));




 

 