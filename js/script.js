let UserInput = document.querySelector(".Input");
let btn = document.querySelector(".go");
let stat = document.querySelector(".status");

    let RandOutcome = [];

    for(let i=0; i<=5; i++){
    let rand =  Math.ceil(Math.random()*100);
    RandOutcome.push(rand) 
}
    
btn.addEventListener('click',function(){
 
    let newUserinput = UserInput.value.split(",")

    if(newUserinput.length === 2){
        let firstInput = newUserinput[0];
        let secondInput = newUserinput[1];
        
        if(RandOutcome.includes(Number(firstInput) && Number(secondInput))){
            stat.textContent = `Congratulations you won 
            the results are ${RandOutcome}`;
        }else{
            stat.textContent =`You lose the results are ${RandOutcome}`
        }
    }else if(newUserinput.length ===3){
        let firstInput = newUserinput[0];
        let secondInput = newUserinput[1];
        let thirdInput = newUserinput[2];

        if(RandOutcome.includes(Number(firstInput) && Number(secondInput) && RandOutcome.includes(Number(thirdInput)))){
            stat.textContent =`Congratulations you won 
            the results are ${RandOutcome}`;
        }else{
            stat.textContent =`You lose the results are ${RandOutcome}`
        }
    }else{
        stat.textContent ="Follow the instructions and provide a valid Input";
    }
})