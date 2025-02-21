let arr=[];
arr.push(10);
arr.push(20);
arr.push(30);
localStorage.setItem('result',JSON.stringify(arr))
let data=localStorage.getItem('result');
let adata=[];
adata=JSON.parse(data);
console.log(adata);
// console.log(arr);
let deletedata=adata.splice(1);
console.log(deletedata);
console.log(adata);
let strdata=JSON.stringify(deletedata);
localStorage.setItem('result',strdata)



