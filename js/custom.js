let btn = document.querySelector("button");
let body = document.body;
//let b = document.querySelector("body");

btn.addEventListener('click',()=>{

    let randomColorRed = Math.floor(Math.random()*255);//floor point ki value ko hata deta h or round off krdeta h
    let randomColorGreen = Math.floor(Math.random()*255);//random 0-1 ke bich ki value lena hai
    let randomColorBlue = Math.floor(Math.random()*255);
        body.style.background = `rgb(${randomColorRed},${randomColorGreen},${randomColorBlue})`;
})
