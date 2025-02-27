var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var box=document.getElementsByClassName('box')
var num=document.getElementById('num');

let number=parseInt(num.innerText)
btn1.addEventListener('click',add);

function add(){
    num.innerText=number++
}
btn2.addEventListener('click',reset);
function reset(){
    number=0
    num.innerText=number
}
btn3.addEventListener('click',decres);
function decres(){
    num.innerText=number--
}
