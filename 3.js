//global variables
out = document.getElementById("output")
left = document.getElementById("left")
right = document.getElementById("right")
//image sources
srcs = ["https://i.discogs.com/CvatvQhF5ilT8fYM85jeA9B97Rg6lFOp_ZxIM3fzNrk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1NDc1/Mi0xNDY3MTExNDM2/LTM2ODIuanBlZw.jpeg",
"https://i.discogs.com/0jxF1nyyFH_tS3QVQPmKSLQXjy9g8aK8dntWzhjkloI/rs:fit/g:sm/q:90/h:420/w:420/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1NDc1/OC0xMzYyMDY3MjUx/LTM4MzcuanBlZw.jpeg",
"https://i.discogs.com/VQMr2cDITr4_LYODZOVzf2vN6I3c5QJla5mkxD7C6p8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NDE1/OC0xNDQyOTk5MDk3/LTI4MDUuanBlZw.jpeg",
"https://upload.wikimedia.org/wikipedia/en/9/97/Therion_Lepaca-Kliffoth_cover-darker.jpg",
"https://i.discogs.com/ry8pWfP0MuGNiwlpbPocjxGWVGc3qjON8kvwXaqqL2I/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2OTIz/NS0xMTg2MjUwMTgy/LmpwZWc.jpeg",
"https://i.discogs.com/zORwTdtDJUC-VIU556LS-Qmcio5zHuzSlWf6WJXVXto/rs:fit/g:sm/q:90/h:579/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5OTE4/NTctMTU2ODU4ODE3/Mi03MDIwLmpwZWc.jpeg",
"https://i.discogs.com/kQxCqbAMqnFlxT8TcLKuPSSKdUolcL05sKw0ILKsJEM/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2OTMy/My0xMTQ0MTM5NTYy/LmpwZWc.jpeg",
"https://i.discogs.com/23l7XgeFaAT7PWD9KsPazbszK6O9vBwMpGZvcz6DJ4c/rs:fit/g:sm/q:90/h:548/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMzM3/MzUtMTYxMzQ2ODky/NS02OTI2LmpwZWc.jpeg",
"https://i.discogs.com/5mXySnVmG8N3p6ndHFHAJD77GwaPRmQ6zo7uQIS8aj8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MzY2/MjctMTM3ODI4NTM4/MC04MTE1LmpwZWc.jpeg",
"https://i.discogs.com/kA0t26dqN1rHUq30VA8PAuONBrx2AQrh4jRiZBxAkYY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3NTIy/Ny0xNTcyNzE3NzA1/LTYwMzIuanBlZw.jpeg",
"https://i.discogs.com/o_nPlTADA7UkQ1xUFgJ2NY_Peukp2HqfTXUFg5B5Yi8/rs:fit/g:sm/q:90/h:550/w:548/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyMDYz/NjAtMTM4NzQ1MTQ5/Ni03MTE5LmpwZWc.jpeg",
"https://i.discogs.com/iZSZCtxTVLzT_w97hXMbAlKs-9ZVdEWyhvhaKKfwJ8k/rs:fit/g:sm/q:90/h:496/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk4MzU1/NDAtMTQ4NzA5MTQw/Mi01NjAxLmpwZWc.jpeg",
"https://i.discogs.com/SS4-9m7fS2FKP4p1B0c2wLLjejhtYtQCMnlZJW1R0xE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5Njgw/MjgtMTMyODg2NzQy/MC5qcGVn.jpeg",
"https://i.discogs.com/1Sn0EaVEzkm69PL6YPMQG4JLvO6-7apkUMseUlNIxrA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MzU2/NDMtMTMzNjU4NDIx/Ni02ODUzLmpwZWc.jpeg",
"https://i.discogs.com/4Lt8M5oErV2IrcZaPvAgNFmOvONwf6jtCONwkpx95gw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODcz/NTQ3LTE1MjM4ODc4/MjYtMzI0OS5qcGVn.jpeg",
"https://i.discogs.com/MsiG7km5PatqHHnzLEv1SVIsBCDtu89z_INhdLEbA10/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MDUx/MzQzLTE2MTEzNDE2/MjktMzk0Mi5qcGVn.jpeg"]
//starting random source
i = Math.floor(Math.random()*srcs.length)
out.src = srcs[i]

function imgScroll(arrow){
    arrow.style.color = "red"
    arrow.style.backgroundColor = "#e4e40f"
    if(arrow.id == "left"){
        if(i==0){
            i=srcs.length-1
        }else{
            i--
        }
    }else if(arrow.id == "right"){
        if(i==srcs.length-1){
            i=0
        }else{
            i++
        }
    }
    out.src = srcs[i]
    setTimeout(function (){
        arrow.style.color = ""
        arrow.style.backgroundColor = ""
    },200)
}