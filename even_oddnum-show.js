
var btn = document.getElementById('btn');
var body = document.getElementById('body');
var txt = document.getElementById('txt');
var result  = document.getElementById('result');

btn.addEventListener('click',show);
btn.addEventListener('dblclick',removeColor);

function show(){
    btn.style.backgroundColor = "green";
    console.log(txt.value);
    var no = txt.value;
    var findNo = (no%2 == 0) ? "Even no" : "Odd no";
    result.innerHTML = findNo;
    
}

function removeColor(){
    btn.style.backgroundColor = "";
    result.innerHTML=''
}

