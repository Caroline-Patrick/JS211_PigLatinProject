import pigLatin from './main'
console.log(pigLatin('translate'))

let input = '';

let userInput = document.getElementById('user-input');
const button = document.getElementById('button');
const reset= document.getElementById('reset');
const textOutput = document.getElementById('text-output')
userInput.addEventListener('keyup',(event)=> {
    input= event.target.value
    console.log(input)
})

button.addEventListener('click', (e)=> {
    console.log('click');
let words= input.split(' ');
let pigWord = words.map(word=> pigLatin(word)).join(' ');
textOutput.innerText =pigWord

})

reset.addEventListener('click', (e)=> {
    userInput.value= '';
    textOutput.innerText= '';
    input= '';
})


