// let a=new Promise((resolve,reject)=>{
//    let value=false;
//    setTimeout(()=>{
//         if(value){
//             resolve(value);
//         }
//         else{
//             reject(value);
//         }
//    },5000)
// });
// console.log(a);
// a.then((val)=>{
//     console.log('then:',val);
// })
// .catch((val)=>{
//     console.log('catch:',val);
// })

// let b=new Promise((resolve,reject)=>{
//     let myvalue=true;
//     setTimeout(()=>{
//         if(myvalue){
//             resolve(myvalue);
//         }
//         else{
//             reject(myvalue);
//         }
//     },10000)
// })
// console.log(b);
// b.then((myval)=>{
//     console.log('then:',myval);
// })
// .catch((myval)=>{
//     console.log('catch:',myval);
// })

// nestet promise
function readfile(){
   return new Promise((resolve,reject)=>{
    resolve('filedata');
   });
}
function processdata(data){
    return new Promise((resolve,reject)=>{
        resolve('process data');
    });
}
function savetodatabase(data){
    return new Promise((resolve,reject)=>{
        resolve();
    });
}
readfile().then((filedata)=>{
    console.log("file data:",filedata);
    return processdata(filedata);
});
processdata().then((processdata)=>{
    console.log('processdata:',processdata);
    return savetodatabase(processdata);
});
savetodatabase().then(()=>{
  console.log('All task completed');})
.catch((myerror)=>{
    console.log('error:',myerror);
})
