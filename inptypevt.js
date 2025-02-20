var txt=document.getElementById('txt');
var btn=document.getElementById('btn');
var body=document.getElementById('body');

txt.addEventListener('input',function(){
    console.log(txt.value);
    body.style.backgroundColor=txt.value;
    body.style.width='100%';
    body.style.height='100vh';
});
btn.addEventListener('click',function(){
    body.style.backgroundColor=txt.value='green';
});
btn.addEventListener('dblclick',function(){
    body.style.backgroundColor=txt.value='';
});