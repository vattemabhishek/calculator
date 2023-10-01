let curVal = '';
let storedVal = '';
let operator = '';
let prevOp;

function functionToExec(input) {


  switch (input) {
    case 'cancel':
      {
        curVal = '';
        storedVal = '';
        operator = '';
        //unlit all the operators
        
        if(prevOp)
        {
          prevOp.classList.remove('special');
        }

      } break;
    //if operator is not empty then repeat equals for second time oprrator entry
    case ('add'):
    case ('subtract'):
    case ('remainder'):
    case ('division'):
    case ('product'):
      {
        //active operator lit and remove other lit operators
        if (operator !== '') {
          equal();
        }
        //lit the active operator
        //unlit the prev active oprator
        //unlit all other operators
       
        const activeOp = document.getElementById(input);
        activeOp.classList.add('special');

        if (!prevOp===activeOp) {
          prevOp.classList.remove('special');
        } 
        prevOp = activeOp;

        operator = input;
        storedVal = curVal;

       

      } break;
    case ('equal'):
      {
        equal();
        //unlit all the operators
        prevOp.classList.remove('special');


      } break;
    case ('plus/minus'):
      {
        curVal *= -1;
      } break;
    case ('decimal'):
      {
        if (curVal[curVal.length - 1] === '.') { }
        else {
          curVal += '.';
        }
      } break;
    default:
      {
        //curvalue and op are empty --> cur value assigned to arg
        //curvalue exits and op is empty --> arg appends to curvalue
        //curvalue  and op exists--> cur value is stored and then cur value is assigned with new arg
        //curvalue is not empty and operator exists -> append to current value


        console.log("🚀 ~ file: calci.js:53 ~ functionToExec ~ curVal:", curVal, operator, storedVal, input)

        if (curVal !== '' && curVal !== storedVal) {
          curVal += input.toString();
        }
        else {
          curVal = input.toString();
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
    curVal = parseFloat(curVal) * parseFloat(storedVal);

  }
  else if (operator === 'remainder') {
    curVal = parseFloat(storedVal) % parseFloat(curVal);

  }
  else if (operator === 'division') {
    curVal = parseFloat(storedVal) / parseFloat(curVal);

  }
  operator = '';
}


