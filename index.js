let count=document.getElementById("count");
let inner=document.getElementsByClassName("inner")[0]
let battery=document.getElementsByClassName("battery")[0]
var i=0;
function test(){
    
    
    
const j=setTimeout("test()",5000);
i++;
    if(i!==101){
        count.innerText=i+"%"
    }else{
        clearTimeout(j);
        inner.style.animation="none"
        battery.style.backgroundColor="aliceblue"
        count.innerText="BatteryFull"
        count.style.color="green"
    }
}
test();
console.log("end")