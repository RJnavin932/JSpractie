var tam=document.getElementById('tam');
var eng=document.getElementById('eng');
var math=document.getElementById('math');
var sci=document.getElementById('sci');
var soc=document.getElementById('soc');
var btn=document.getElementById('btn');
var showresult=document.getElementById('showresult');

btn.addEventListener('click',result);
function result(){
   var  tamilmark=Number(tam.value);
   var engmark=Number(eng.value);
   var mathmark=Number(math.value);
   var scimark=Number(sci.value);
   var socmark=Number(soc.value);

   var totalmark=tamilmark+engmark+mathmark+scimark+socmark;
   showresult.innerHTML='Total Mark:'+totalmark; 
   console.log(totalmark);

}

// btn.addEventListener('click',()=>{;
    
//     const tam=document.getElementById('tam');
//     const eng=document.getElementById('eng');
//     const math=document.getElementById('math');
//     const sci=document.getElementById('sci');
//     const soc=document.getElementById('soc');


// //         //  change string to float
//      let tamilmark=Number(tam.value);
//      let engmark=Number(eng.value);
//      let mathmark=Number(math.value);
//      let scimark=Number(sci.value);
//      let socmark=Number(soc.value);
        // let totalmark=0
//        totalmark=tamilmark+engmark+mathmark+scimark+socmark;
//       showresult.textContent=totalmark; 
//     // showresult.innerHTML=totalmark;
//         console.log(totalmark);
         
// })


