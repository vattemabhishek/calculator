let curVal = '';
let storedVal = '';
let operator = '';

function functionToExec(a) {

  switch (a) {
    case 'cancel':
      {
        curVal = '';
        storedVal = '';
        operator = '';
      } break;
    //if operator is not empty then repeat equals for second time oprrator entry
    case ('add'):
    case ('subtract'):
    case ('remainder'):
    case ('div'):
    case ('product'):
      {
        if (operator !== '') {
          equal();
        }

        operator = a;
        storedVal = curVal;

      } break;
    case ('equal'):
      {
        equal();
      } break;
    case ('plus/minus'):
      {
        curVal *= -1;
      } break;
    case ('decimal'):
      {
        if(curVal[curVal.length-1]==='.'){}
        else{
        curVal += '.';}
      } break;
    default:
      {
        //curvalue and op are empty --> cur value assigned to arg
        //curvalue exits and op is empty --> arg appends to curvalue
        //curvalue  and op exists--> cur value is stored and then cur value is assigned with new arg
        //curvalue is not empty and operator exists -> append to current value
        
        
        console.log("🚀 ~ file: calci.js:53 ~ functionToExec ~ curVal:", curVal, operator, storedVal, a)

        if (curVal !== '' && curVal !== storedVal) {
          curVal += a.toString();
        }
        else {
          curVal = a.toString();
        }
      } break;

  }
  console.log(curVal);
  const displayBar = document.getElementById('display');
  displayBar.innerHTML = curVal;

};

function equal() {
  if (operator === 'add') {
    curVal = parseFloat(storedVal) + parseFloat(curVal);
  }
  else if (operator === 'subtract') {
    curVal = parseFloat(storedVal) - parseFloat(curVal);
  }
  else if (operator === 'product') {
    curVal=parseFloat(curVal) * parseFloat(storedVal);
    
  }
  else if (operator === 'remainder') {
        curVal=  parseFloat(storedVal) % parseFloat(curVal);
    
  }
  else if (operator === 'div') {
        curVal= parseFloat(storedVal)/parseFloat(curVal);
    
  }
  operator = '';
}

const element = document.querySelectorAll('#btn');

element.addEventListener("click", function() {
  element.style.backgroundColor = "green";
});
