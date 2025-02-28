var a=document.getElementById('a');
var b=document.getElementById('b');
var c=document.getElementById('c');
var d=document.getElementById('d');
var e=document.getElementById('e');
var btn=document.getElementById('btn');
var total=document.getElementById('total');


btn.addEventListener("click",marks);

function marks(){
    var avalue=Number(a.value)
    var bvalue= Number(b.value)
    var cvalue=Number(c.value)
    var dvalue=Number(d.value)
    var evalue=Number(e.value)
     
    var result=avalue+bvalue+cvalue+dvalue+evalue;
    total.innerHTML='Total marks:'+result;
    console.log("Total marks:",result); 
}


