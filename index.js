let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
let result = document.querySelector(".result")

function changePosition(){

    let x =Math.floor(Math.random()*100);
    let y =Math.round(Math.random());
    let z =Math.round(Math.random());
    console.log(x,y,z)
    y == 0 ? no.style.left = x+"%" : no.style.right = x+"%"
    z == 1 ? no.style.top = x+"%" : no.style.buttom = x+"%"
    // no.style.horizon[y] = x+"px";
    // no.style.vertical[z] = x+"px";

}
yes.addEventListener('click',()=>{
    console.log("hello")
    result.innerHTML = "I knew it"
})
no.addEventListener('click',(e)=>{
    console.log("why no")
    changePosition();
})