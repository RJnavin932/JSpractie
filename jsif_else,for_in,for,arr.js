// type conversion
var a=2
console.log(typeof a);
console.log(a);
var student={
    name:'naveen',
    age:22
}
console.table(student);
console.log(student);

var b='1123'
b=Number(b)
console.log(b,typeof b);

// type coertion

var c='1123'
var d=10
c=Number(c)
console.log(c+d);
//  ternary ooprator
let age=15
let result=age>=18?!'eligible':'noteligible';console.log(result);

// halndling nullvalue
function welcome(name){
    const result=name?name:'no name';
    console.log('welcome',result);
}
welcome('naveen')
welcome()
welcome(null)

let mark=60
let tresult=mark>=90?'A GRADE':mark>=80?'B GRADE':mark>=70?' C GRADE':'D GRADE';console.log(mark+'='+tresult);

let students=[
    
        {
           name:'ravi',
           age:22
        },
        {
            name:'ram',
            age:23
        },
        {
            name:'ramesh',
            age:17
        }

    ];
    console.log(students);
    let bgroup=['a+','b+','o+'];
    // students.city??='salem'
    // console.log(students);
    students.map((data,i)=>{
        let mydata=data.age>=18?'Eligible':'Not Eligible';
        // data.vote='Eligible voter';
        console.log(mydata,data);
        // console.log(data); 
          data.city='salem'
        // console.log(students.city);
        data.bloodgroup=bgroup[i];
    });
    
    // ??= nullish coalleriscing oprator
    const tnull=null??'No Name';
    console.log(tnull);
    let myuser={'name':' josh'}
     console.log(myuser.name);
     myuser.city??='selam';
     console.log(myuser.city);
     console.log(myuser);
 
    
// postfix increament a++   postfix decreament a--
// prefix increament ++a    prefix  decreament --a

let x=3;
let y=x++
console.log('X:',x,"Y:",y); 

let e=4
let f=++e
console.log('E:',e,"F:",f);

// if statement 
// syntax 
// if(condition){
//  *******
//  *****
// }

// if else statement
// syntax
// if(condition){
//  *******
//  *****
// }
// else{
// ***
// }

// else if statement

// syntax
// if(condition){
//  *******
//  *****
// }
// else if(condition){
//  *******
//  *****
// }
// else{
// ***
// }

// nesteted if statement
// syntax
// if(condition){
//  *******
//  *****
       // if(condition){
       //  *******
       //  *****
       // }
       // else if(condition){
       //  *******
       //  *****
       // }
       // else if(condition){
       //  *******
       //  *****
       // }
// }
// else if(condition){
//  *******
//  *****
// }
// else{
// ***
// }

// Looping statement
// while loop
// syntax
// while(condition){
// ******
// ******
// }
let i=1;
while(i<=10){ //1<=10 2<=10 3<=10 4<=10 5<=10 6<=10 7<=10 8<=10 9<=10 10<=10 11<=10
    console.log(i);
    // 1 2 3 4 5 6 7 8 9 10
    i++ //2 3 4 5 6 7 8 9 10 11
}

// do while loop
// syntax
// do{
//   ****
//   ****
// }
// while(condition)

let table=2;i=1;
do{
    console.log(table+'x'+i+'='+(table*i));
    i++
}
while(i<=5)

let data=[1,2,3,4,5];
let res=data.length-1;
do{
    // console.log(15-data[i]);
    i--
}
while(i>=0)

// let tnum=[1,2,3,4,5];
// let res=[];
// let fun=(tnum)=>{
// tnum.forEach((value,index)=>{
//    sum=0;
//    tnum.forEach((v,i)=>{
//     if(index!=i){
//          sum+=v  
//     }
//    })
//    res.push(sum)
// })
// return res;
// }
// console.log(fun(tnum));

// let lett='kadhak kiasuad mjhfaiuu majhiasdkhau ';
// let fung=(lett)=>{
//     let big=0;
//     arr=lett.split(' ')
//     let word=[];
//     arr.forEach((val)=>{
//         if(big<=val.length){
//         big=val.length
//         word=val
//     }
//     })
//     return word
// }
// console.log(fung(lett));

// let tnum1=[1,5,3,5,5];
// let myres=[];
// tnum1.forEach((v,i)=>{v==5?myres.push(i):'';})
// console.log(myres);


// let letter=['a','e','i','a','a','a'];
// let myresl=[];
// letter.forEach((value,index)=>{value=='a'?myresl.push(index):'';
// })
// console.log(myresl);

// forloop
for (let i=0;i<10;i++){
    console.log(i);
}

let arr1=[];
for(let i=0;i<=100;i++){
    arr1.push(i);
}
console.log(arr1);

let arr2=[];
for(let i=0;i<=100;i+=2){
    arr2.push(i);
}
console.log(arr2);

let nums=[];
for(let i=0;i<3;i++){
    nums.push([]);
    for(let j=0;j<3;j++){
        nums[i].push(j);
    }
}
console.log(nums);
console.table(nums);

// for of loop
let names=['tiya','ramesh','ram','raja'];
for(let name of names){
    console.log(name);
}

// for in loop
let detail={
    name:'naveen',
    age:22,
    address:'thoothukudi',
    Email:'rjanveen@gmail.com'
}
for(let key in detail){
    console.log(key,':',detail[key]);
}

// break statement
for(let i=0;i<=10;i++){
    if(i==4){
        break;
    }
    console.log(i);
}
// continue statement
console.log('continue statement');
for(let i=0;i<=10;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}
