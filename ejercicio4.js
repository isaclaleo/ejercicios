function man(nudes) {
  const split = nudes.toString().split("")
  let sum = 0
  for (let i = 0; i < split.length; i++) {
    const element = split.map(Number)
    let oposi = element[i] * -1;
    i % 2 === 0 ? sum+= element[i] : sum += oposi
  }
  return sum
}

let nudes = 521

console.log("Respuesta",man(nudes));

function ma(nude) {
  const split = nude.toString().split("").map(Number)
  let sum = 0
  for (let i = 0; i < split.length; i++) {
    let oposi = split[i] * -1;
    i % 2 === 0 ? sum+= split[i] : sum += oposi
  }
  return sum
}

let nude = 111

console.log("Respuesta",ma(nude));

let nu = 521
let  sum = 0
const split = nu.toString().split("").map(function(index , element){
  if(element % 2 == 0) {
    sum += Number(index)
  }else {
    let oposi = Number(index) * -1
    sum += oposi
  }
})

console.log("Respuesta",sum);

let nuIn = 521
let  su = 0
const spli = nuIn.toString().split("").map(function(index , element){
  let oposi = Number(index) * -1;
  element % 2 == 0 ? 
    su += Number(index) :
    su += oposi
})

console.log("Respuesta",su);

nuIn.toString().split("").forEach((index, element) => {
  let oposi = Number(index) * -1;
  element % 2 === 0 ?
    sum += Number(index) :
    sum += oposi
});


console.log("Respuesta",sum);

import { sum } from "./expor"