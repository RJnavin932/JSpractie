function validation(event){
    event.preventDefault();
    const uname=document.getElementById('uname').value;
    const email=document.getElementById('email').value;
    const pwd=document.getElementById('password').value;
    const agree=document.getElementById('AGREE').checked;
    const NAMEERROR=document.getElementById('NAMEERROR');
    const EMAILERROR=document.getElementById('EMAILERROR');
    const PASSWORDERROR=document.getElementById('PASSWORDERROR');
    const AGREEERROR=document.getElementById('AGREEERROR');
    

    const uname2=document.getElementById('uname');
    const email2=document.getElementById('email');
    const pwd2=document.getElementById('password');
    const agree2=document.getElementById('AGREE');
    
    NAMEERROR.textContent=('');
    EMAILERROR.textContent=('');
    PASSWORDERROR.textContent=('');
    AGREEERROR.textContent=('');
     if(uname===''){
         NAMEERROR.textContent=('please fill the name field');
         NAMEERROR.style.color='red';
         uname2.style.border='1px solid red';
         isvalid=false;
     }
     else if(uname.length<7){
      NAMEERROR.textContent=('please fill the name minimum 7 letters');
      NAMEERROR.style.color='red';
      uname2.style.border='1px solid red';      
      isvalid=true;
     }
     else{
      let scount=0;
      let capcount=0;
      for(let i=1;i<=uname.length;i++){
         if((uname.charCodeAt(i)>=97)&&(uname.charCodeAt(i)<=122)){
            capcount++;
           console.log('if',uname.charCodeAt(i),'smallletter',capcount);
         }
         else if((uname.charCodeAt(i)>=65)&&(uname.charCodeAt(i)<=90)){
            scount++;
            console.log('else if',uname.charCodeAt(i),'capsletter',scount);
         }
      }
      
      if(capcount !=0 && scount !=0){
         uname2.style.border='1px solid green';
         isvalid=true;
      }
      else{
        NAMEERROR.textContent=('please fill the name minimum one small and cpital letter');
        NAMEERROR.style.color='red'
        uname2.style.border='1px solid red';
         isvalid=false;
      }
     }
     if(email===''){
        EMAILERROR.textContent=('please fill the email field');
        EMAILERROR.style.color='red';
        email2.style.border='1px solid red';
        isvalid=false;
     }
     else{
      email2.style.border='1px solid green';
      isvalid=true
     }
     if(pwd===''){
        PASSWORDERROR.textContent=('please fill the password field');
        PASSWORDERROR.style.color='red';
        pwd2.style.border='1px solid red';
        isvalid=false;
     }
     else{
      let splcount=0;
      let letcount=0;
      let numcount=0;
      for(let i=1;i<=pwd.length;i++){
         if(pwd.charCodeAt(i)==64 || pwd.charCodeAt(i)==33 || pwd.charCodeAt(i)==39){
            splcount++;    
            console.log('if',pwd.charCodeAt(i),'specialcharactar',splcount);
         }
         else if(pwd.charCodeAt(i)>=65 && pwd.charCodeAt(i)<=90){
            letcount++;
            console.log('elseif:',pwd.charCodeAt(i),letcount);
         }
         else if(pwd.charCodeAt(i)>=48 && pwd.charCodeAt(i)<=57){
            numcount++;
            console.log('else if',pwd.charCodeAt(i),numcount);
         }
         else if(pwd.charCodeAt(i)==32){
            PASSWORDERROR.textContent='please Remove space';
            PASSWORDERROR.style.color='red';
            pwd2.style.borderColor='red';
            isvalid=true;
         }
      }
      if(splcount!=0){
         pwd2.style.border='1px solid green';
         isvalid=true
      }
      else{
         PASSWORDERROR.textContent='please fill special character @ ! ,';
         PASSWORDERROR.style.color='red';
         pwd2.style.border='1px solid red';
         isvalid=false;
      }
      if(letcount!=0){
         isvalid=true;
      }
      else{
         PASSWORDERROR.textContent='please add some cpital letters';
         PASSWORDERROR.style.color='red';
         pwd2.style.border='1px solid red';
         isvalid=false;
      }
      if(numcount!=0){ 
        isvalid=true;
      }
      else{
         PASSWORDERROR.textContent='please add random numbers';
         PASSWORDERROR.style.color='red';
         pwd2.style.border='1px solid red';
         isvalid=false;
      }
     }
     if(!agree){
        AGREEERROR.textContent=('please fill the AGREE field');
        AGREEERROR.style.color='red'
        isvalid=false;
     }
     return isvalid;
     
}
const form=document.getElementById('REGFORM');
form.addEventListener('submit',validation);

