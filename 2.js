//create global variables
srcs = ["https://i-english.vnecdn.net/2020/08/25/thac-1598317582-6704-1598317667_680x408.jpg","https://www.tripsavvy.com/thmb/xmHHjutbUKGMvgxh5Dr1F_BVXB8=/3435x2576/smart/filters:no_upscale()/fuji-mountain-in-autumn-822273028-5a6a8a9c3418c600363958d3.jpg","https://images.unsplash.com/photo-1603979649806-5299879db16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80","http://www.bohemianparadisetour.com/images/history/ruined-castle-frydstejn.jpg"]
names = ["slide one","slide two","slide three","slide four"]
display = document.getElementById("main-img")
displayName = document.getElementById("main-name")
chs = []
for(let i=0;i<4;i++){
    chs[i] = document.getElementById("ch"+(i+1))
}

//load images into gallery
setI = 2
display.src = srcs[setI]
displayName.innerText = names[setI]

for(let i=0;i<4;i++){
    document.querySelector("#ch"+(i+1)+" img").src = srcs[i]
    document.querySelector("#ch"+(i+1)+" div").innerText = names[i]
}

//add listeners
for(let i=0;i<4;i++){
    chs[i].addEventListener("mouseenter",function(){chHover(i)})
    chs[i].addEventListener("mouseleave",chLeave)
    chs[i].addEventListener("click",function(){chClick(i)})
}
//functions
function chHover(i){
    display.src = srcs[i]
    displayName.innerText = names[i]
}

function chLeave(){
    display.src = srcs[setI]
    displayName.innerText = names[setI]
}

function chClick(i){
    setI = i
    display.src = srcs[setI]
    displayName.innerText = names[setI]
}