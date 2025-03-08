let b1=document.querySelector('#red');
let b2=document.querySelector('#green');
let b3=document.querySelector('#blue');
let b4=document.querySelector('#black');
b1.addEventListener('click',()=>{
    document.body.style.backgroundColor="red";
})
b2.addEventListener('click',()=>{
    document.body.style.backgroundColor="green";
})
b3.addEventListener('click',()=>{
    document.body.style.backgroundColor="blue";
})
b4.addEventListener('click',()=>{
    document.body.style.backgroundColor="black";
})