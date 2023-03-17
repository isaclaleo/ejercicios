function ordenStrictly(arr, k) {
  let prev = 0;
  
  for(let i = 0; i < arr.length; i++) {
      const diff = arr[i] - prev - 1;
      if(k > diff) k -= diff;
      else return prev + k;
      prev = arr[i];
      console.log(prev)
  }
  return prev + k     
};


let arr = [2,3,4,7,11];
let k = 5;

let arr2 = [1,2,3,4];
let k2 = 2;
console.log(ordenStrictly(arr, k));