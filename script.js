//your JS code here. If required.

let counter =document.getElementById("counter");
let btn =document.getElementById("incrementBtn");

btn.onclick=()=>{
	alert(counter.innerText);
	counter.innerText++;
}