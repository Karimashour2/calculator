

let buttonsElements= document.querySelectorAll('.btn');
let screenElement= document.querySelector('input');
let clearBtn= document.querySelector('.clear');
let equalBtn= document.querySelector('.equal');
screenElement.focus();


buttonsElements.forEach((button)=>{
  button.onclick=(e)=> {
    screenElement.value += e.target.value
  }
});

clearBtn.onclick= ()=> screenElement.value = ''

let answer= equalBtn.addEventListener('click',(e)=>{
  screenElement.value===''? screenElement.value='':
  screenElement.value= Number.isInteger(eval(screenElement.value))?
  eval(screenElement.value) : eval(screenElement.value).toFixed(2)
})

