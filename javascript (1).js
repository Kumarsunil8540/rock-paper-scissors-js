let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user_score");
let compScorePara=document.querySelector("#comp_score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#masg");

let showWin = (userwin,userchoic,compChoic)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=`${userScore}`
        msg.innerText=`You win! your ${userchoic} beats ${compChoic}`
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=`${compScore}`
        msg.innerText=`You lost. ${compChoic} beats your ${userchoic}`
        msg.style.backgroundColor="red"
    }
}
const genrateCompChoic=()=>{
    const option=["rock","paper","scissors"]
    const random=Math.floor(Math.random()*3)
    return option[random]
    
}
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again."
    msg.style.backgroundColor="#05204A"
}

const playGame=(userchoic)=>{
    const compChoic = genrateCompChoic();
    if(userchoic===compChoic){
        drawGame()
    }else{
        let userwin=true;
        if(userchoic==="rock"){
            userwin=compChoic==="paper" ? false : true;
        }
        else if(userchoic==="paper"){
            userwin=compChoic==="scissors" ? false : true;
        }
        else{
            userwin=compChoic==="rock" ? false : true;
        }
        showWin(userwin,userchoic,compChoic);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoic =choice.getAttribute("id")
        playGame(userchoic);

    })
})