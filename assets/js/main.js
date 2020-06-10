const body=document.body;
const startBtn=document.getElementById("btn");
const zeit=document.querySelector(".zeit")

let countDown=100
startBtn.addEventListener("click",e=>{
  var x = setInterval(() => {
        countDown--
        zeit.textContent=`${countDown}%`
        if (countDown<=0) {
        clearInterval(x)
        zeit.innerHTML+=`<br> your Downloud ist Ready`
        startBtn.textContent=":)"
        body.style.background="green"
        body.style.color="black"
        zeit.style.background="black"
        startBtn.style.background="black"
        }
        
    }, 30);
})