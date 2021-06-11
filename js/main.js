function setWord(){
  word=words.splice(Math.floor(Math.random()*words.length),1)[0];
  target.textContent=word;
  loc=0;
}

const words=[
  "red",
  "blue",
  "yellow",
  "pink",
  "green",
];
let word;
let loc=0;
let startTime;
let inPlaying=false;
const target=document.getElementById("target");

document.addEventListener("click",()=>{
  if(inPlaying===true){
    return;
  }
    startTime=Date.now();
    setWord();
    inPlaying=true;
})

document.addEventListener("keydown",(e)=>{
  if(e.key!==word[loc]){
    return;
  }
  
    loc++;

    target.textContent="_".repeat(loc)+word.substring(loc);
  
  if(loc===word.length){
    if(words.length===0){
      const time=((Date.now()-startTime)/1000).toFixed(2);;

      
      document.getElementById("result").textContent="finished!"+time+"second!";
      return;
    }
    setWord();
  }

})

