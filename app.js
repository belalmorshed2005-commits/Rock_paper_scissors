 function getcomputerchoice() {
const options = ["rock","paper","scissors"] ;
const randomIndex = Math.floor(Math.random()* options.length)
const computerchoice = options[randomIndex];
console.log(computerchoice) ;
return computerchoice ;
}

function gethumanchoice(){
const  humanchoice =prompt("please inter your choice") ;
console.log(humanchoice) ;
return humanchoice ;
}
