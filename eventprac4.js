var clr=document.getElementById('clr')
var code=document.getElementById('code');
var btn=document.getElementById('btn');
btn.addEventListener('click',colorGenerate);
function colorGenerate(){
    let values='0123456789abcdef';
    let color='#';
    for(let i=0;i<8;i++){
        let randomvalue=Math.floor(Math.random()*16);
        color+=values[randomvalue];
    }
    code.innerHTML=color;
    clr.style.backgroundColor=color;
    
}

