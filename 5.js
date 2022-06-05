balance = document.getElementById("balance")
sqr = document.getElementsByClassName("square")
score = document.getElementById("score")
btn = document.getElementById("btn")
colors = ["darkgray","black","blue","yellow","darkkhaki","lightgreen","greenyellow","red","purple","cyan"]
//initialize balance from local storage
bal = parseFloat(localStorage.getItem("bal"))
if(isNaN(bal)){
    bal = 0
}
balance.innerText = "ბალანსი: "+bal+" ლ"

enabled = true
function generate(){
    if(enabled){
        enabled = false
        btn.style.color = "red"
        var tmp = 0
        var c7 = 0
        for(let i=0;i<5;i++){
            let n = Math.floor(Math.random()*10)
            sqr[i].innerText = n
            sqr[i].style.color = colors[n]
            if(n==7){
                c7++
                sqr[i].style.backgroundColor = "gold"
                tmp+=1
            }else{
                sqr[i].style.backgroundColor = "white"
                tmp-=0.5
            }
        }
        if(c7==3){
            tmp += 100
        }
        if(tmp>0){
            score.innerText = "+"+tmp
        }else{
            score.innerText = tmp
        }
        bal += tmp
        localStorage.setItem("bal",bal)
        setTimeout(function (){
            balance.innerText = "ბალანსი: "+bal+" ლ"
            score.innerText = ""
            btn.style.color = ""
            enabled = true
        },1000)
    }
}