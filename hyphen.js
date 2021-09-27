alert('hello world');
alert("I am an alert box!");
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', ()=>{
    navMenu.style.left = '0';
})
closeBtn.addEventListener('click', ()=>{
    navMenu.style.left = '-100%';
})

// const navLinks = document.getElementById('navLinks')
// const closeBtn = document.getElementById('closeBtn')
// const menuBtn = document.getElementById('menuBtn') 

// menuBtn.addEventListener('click', ()=>{
//     navLinks.style.right = '0';
// })
// closeBtn.addEventListener('click', ()=>{
//     navLinks.style.right = '-50vw';
// })

// // cursor
// const cursor = document.getElementById('cursor');

// document.onmousemove = function(e){
//     cursor.style.left = (e.pageX - 25) + "px";
//     cursor.style.top = (e.pageY - 25) + "px";
//     cursor.style.display = "block";}
