var res=document.getElementById('res')
var msg=document.getElementById('msg');
var age=document.getElementById('age');
var btn=document.getElementById('btn');

btn.addEventListener('click',result)
    function result(){
    let ageValue=Number(age.value);
    if(age.value === ""){
        alert('Please filled value');
        return;
       
    }
    else if(ageValue < 18){
        res.style.backgroundColor='blue';
         msg.textContent='Not Eligible';
         msg.innerHTML +='<span>&#128078;</span>'
          

    }
    else{
        res.style.backgroundColor='red';
        msg.textContent='Eligible';
        msg.innerHTML +='<span>&#128077;</span>'
        
    }
}
