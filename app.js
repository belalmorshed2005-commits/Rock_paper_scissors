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
let humanscore = 0 ;
let computerscore = 0 ;
function playround(humanchoice,computerchoice) {
if(computerchoice===humanchoice) { alert("draw")} 
else if(humanchoice==="scissors" && computerchoice==="paper") {alert("win"); humanscore+=1; }  
else if(computerchoice==="rock" && humanchoice==="paper") {alert("win"); humanscore+=1; }
else if(humanchoice==="rock" && computerchoice==="scissors") {alert("win") ; humanscore+=1;}
else{alert("lose") ; computerscore+=1;} ;

}

function Gameround() {
    const humanselsction = gethumanchoice() ;
const computerselection = getcomputerchoice() ;
    playround(humanselsction,computerselection) ;
 
}
for(let i=0;i<5;i++) {
Gameround();
console.log(humanscore,computerscore) ;
if(humanscore===3) {break;};
if(computerscore===3) {break;};

}
function test(humanscore,computerscore){
if(humanscore>computerscore) {console.log(`you win ${humanscore} & ${computerscore}`)}
else if(humanscore<computerscore) {console.log(`you lose ${computerscore} & ${humanscore}`)}
else{console.log(`draw $(humanscore,computerscore)`)}
}
test(humanscore,computerscore) ;