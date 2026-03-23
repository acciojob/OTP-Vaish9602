//your JS code here. If required.
const inputs=document.querySelectorAll(".code");
inputs.forEach((input,idx)=>{
input.addEventListener('input',(e)=>{
	if(e.target.value.length===1 && idx <inputs.length-1){
		inputs[idx+1].focus();
		
}
})
	input.addEventListener("keydown",(e)=>{
if(e.key == "Backspace" && idx> 0 && input.value===""){
	inputs[idx-1].focus();
}
	})
})