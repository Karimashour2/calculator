
let isEqual = false;

const equalFn= ()=>{
  screenElement.value===''? screenElement.value='':
  screenElement.value= Number.isInteger(eval(screenElement.value))?
  eval(screenElement.value) : eval(screenElement.value).toFixed(2);
  isEqual = true;
} 
document.body.addEventListener('keydown', (e)=> {
if(e.key==='Enter'){
  equalFn()
}else if(!isNaN(e.key)){
  if(isEqual){
    screenElement.value = e.key;
  }else{
    screenElement.value += e.key;
  }
  isEqual=false;
} else if (['+', '-', '*', '/', '.'].includes(e.key)) {
  screenElement.value += e.key;
}
if(e.key === 'Backspace') {
  screenElement.value = screenElement.value.substring(0, screenElement.value.length - 1);
}
e.preventDefault();
})

let buttonsElements= document.querySelectorAll('.btn');
let screenElement= document.querySelector('input');
let clearBtn= document.querySelector('.clear');
let equalBtn= document.querySelector('.equal');
screenElement.focus();


buttonsElements.forEach((button)=>{
  button.onclick=(e)=> {
    if(isEqual){
      screenElement.value = '';
      isEqual = false;
    }
    screenElement.value += e.target.value
  }
});

clearBtn.onclick= ()=> screenElement.value = ''

equalBtn.addEventListener('click', equalFn)


