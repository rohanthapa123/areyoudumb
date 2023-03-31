let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
let result = document.querySelector(".result")
let qns = document.querySelector(".qns")

function changePosition(){
    const parentRect = no.parentElement.getBoundingClientRect();
    let x =Math.floor(Math.random()*parentRect.width);
    let xx =Math.floor(Math.random()*parentRect.height);
    let y =Math.round(Math.random(100));
    let z =Math.round(Math.random(100));
    // console.log(x,y,z)
    no.style.background = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    qns.style.color = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    y%2 == 0 ? no.style.left = x+"px" : no.style.right = x+"px"
    z%2 == 0 ? no.style.top = xx+"px" : no.style.buttom = xx+"px"
    // no.style.horizon[y] = x+"px";
    // no.style.vertical[z] = x+"px";
    // no.style.transform = `translate(${x}%,${x}%)`

}
let b = 1;
yes.addEventListener('click',()=>{
    console.log("hello")
    result.innerHTML = "I knew it"
    b=0;
})
no.addEventListener('click',(e)=>{
    console.log("why no")
    if(b)
    changePosition();
    else
    result.innerHTML = "Once a dumb always a dumb !!"
})