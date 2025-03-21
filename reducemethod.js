const items=[
    {name:'apple',catocary:'fruit'},
    {name:'onion',catocary:'vegetable'},
    {name:'mango',catocary:'fruit'},
    {name:'tomato',catocary:'vegetable'},
];

const groupitems=items.reduce((accumlator,curentval)=>{
      const catocary=curentval.catocary;

      if(!accumlator[catocary]){
        accumlator[catocary]=[];
      }
      accumlator[catocary].push(curentval.name)
      return accumlator
},{})
console.log(groupitems);

let letters=[
    ['a','b','c'],
    ['d','f','c'],
    ['g','b','h']
];

// console.log(letters.flat());  convert in 2diementional array to single array 

let mylett=letters.flat().reduce((total,cvalue)=>{
         if(total[cvalue]){
            total[cvalue]++
         }
         else{
            total[cvalue]=1
         }
      return total   
},{})

console.log(mylett);


let arr =[4,6,2,3,1,1,3,5,7,8,4,3];

let myarr=arr.reduce((accumlator,currentValue)=>{
     if(!accumlator.includes(currentValue)){
        accumlator.push(currentValue)
     }
     return accumlator
},[])
console.log(myarr);
    
let tName='Robert Antdrew George  J F N K L';
let fname=tName.split('')
let myname=fname.filter((data,value)=>{
   let code=data.charCodeAt()
   if(code >=65 && code<=90){
      console.log(data);
   }
})


