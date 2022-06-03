box = document.getElementById("box")

//initial generation
sqrs = []
for(let i=0;i<64;i++){
    let sqr = document.createElement("div")
    sqr.className = "square"
    sqr.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
    box.appendChild(sqr)
    sqrs[i] = sqr
}

//color-changing animation
setId = setInterval(recolour,200)

function recolour(){
    console.log("recolour")
    for(let i=0;i<64;i++){
        sqrs[i].style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
    }
}