let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
let result = document.querySelector(".result")

function changePosition(){

    let x =Math.floor(Math.random()*100);
    let y =Math.round(Math.random(100));
    let z =Math.round(Math.random(100));
    console.log(x,y,z)
    no.style.background = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    y%2 == 0 ? no.style.left = x+"%" : no.style.right = x+"%"
    z%2 == 0 ? no.style.top = x+"%" : no.style.buttom = x+"%"
    // no.style.horizon[y] = x+"px";
    // no.style.vertical[z] = x+"px";
    // no.style.transform = `translate(${x}%,${x}%)`

}
yes.addEventListener('click',()=>{
    console.log("hello")
    result.innerHTML = "I knew it"
})
no.addEventListener('click',(e)=>{
    console.log("why no")
    changePosition();
})