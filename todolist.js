let colors=document.querySelector('body');
let p = document.getElementById("back");

function changecolor(){
    
    let num = Math.random();
    // console.log(num);
    const pp=document.getElementById("back").innerHTML;
    num =num*(Math.pow(10,6))
    num = Math.floor(num);
    p.innerText = "Background color is: #"+num;
    colors.style.backgroundColor=`#${num}`;
    console.log(num);
}
