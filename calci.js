function functionToExec(a) {
    let curVal = "";
    let storedVal = "";
    let operator='';
    
    switch (a) {
         case (add):
        {
                operator = 'add';
        } break;
        case (subtract):
        {
                operator = 'subtract';
        }break;
        case(equal):
        {

        }break;
        case(remainder) :
        {
                operator = 'remainder';
        }break;
        case(div):
        {
                operator = 'div';
        }break;
        case(product):
        {
                operator = 'product';
        }break;
        case(plus/minus):
        {

        }break;
        case(decimal):
        {
            
        }break;
        default :
        {
                if(curVal && storedVal==="") 
                {
                   curval = curval + a.toString();         
                }
                else
                {
                    curval = a.toString();
                }
        }break;
    }

    
    
    
};