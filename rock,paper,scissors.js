function playerPlay(){
    playerSelection=window.prompt("Welcome to the game! Rock, scissors or paper?");
        return playerSelection.toLowerCase();   
}

function computerPlay(){
        
    computerSelection=Math.floor(Math.random()*3+1);
    
    if (computerSelection==1){
        return "rock";
    } 
    else if (computerSelection==2){
        return "scissors";
    }
        else if (computerSelection==3){
        return "paper";
    }  
}
    
function playRound(playerSelection,computerSelection){
    
    if (computerSelection===playerSelection){
        return "Fair game, good try!";
    }
    else if 
        ((computerSelection==="rock" && playerSelection==="scissors")||
        (computerSelection==="scissors" && playerSelection==="paper")||
        (computerSelection==="paper" && playerSelection==="rock")){
        return "Computer Win! Hahahahaha you lose!";            
    } 
    else if (playerSelection){
        return "Player win!";
    }
    else {
        return "Error, please try again."
    }

}
    
function game(){
    
    for(i=0; i<5; i++){
        player=playerPlay();
        computer=computerPlay();
        console.log("player:"+player);
        console.log("computer:"+computer);
        console.log("result:"+playRound(player,computer)); 
    }
}
game();



