console.log('this is a stone paper scissor');

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle('active')
});

let player = document.querySelector('.player')
let computer = document.querySelector('.computer')
let input = document.querySelector('.input')
let random = Math.floor(Math.random()*3)+1;
console.log(`The Random Number is ${random}`);



let mix ;
if(random == 1){
    mix = 'stone'
}else if(random == 2){
    mix = 'paper'
}else if(random == 3){
    mix = 'scissor'
}
console.log(mix)

let stone = document.querySelector('#stone');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');

let type;
[stone,paper,scissor].forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        console.log("button is clicked")
        type = Element.value;
        console.log(type);
        games();
        playerinput();
        
    });
});

let computerInput;
function games(){
    let html;
    if(type == mix){
        html += ` It's a ${type} You have Won`
        input.innerText = html
        player.innerHTML += `<img src=\" ${type}.png\" >`
        console.log("You have won")
    }else{
        html += ` It's a ${type} You have Loss`
        input.innerText = html
        player.innerHTML += `<img src=\" ${type}.png\" >`
        console.log("You have lossed")
    }

}


function playerinput(){
    if(random == 1){
        mix = 'stone'
        computer.innerHTML += `<img src=\" stone.png\" >`
    }else if(random == 2){
        mix = 'paper'
        computer.innerHTML += `<img src=\" paper.png\" >`
    }else if(random == 3){
        mix = 'scissor'
        computer.innerHTML += `<img src=\" scissor.png\" >`
    }    

}

