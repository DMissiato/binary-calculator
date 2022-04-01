
const res = document.querySelector('#res');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnEql = document.querySelector('#btnEql');
const btnSum = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');

let num1 = '', 
    num2 = '', 
    operand = '';

const clear = () =>
{
    num1 = '';
    num2 = '';
    operand = '';
}

const setOperand = (value) =>
{
    if(num2) return;
    operand = value;
    res.innerHTML = num1 + operand;
}


btn0.addEventListener('click', () =>
{
    if(operand)
    {
        num2 += '0';
    }
    else
    {
        num1 += '0';
    }
    res.innerHTML = num1 + operand + num2;
});

btn1.addEventListener('click', () =>
{
    if(operand)
    {
        num2 += '1';
    }
    else
    {
        num1 += '1';
    }
    res.innerHTML = num1 + operand + num2;
});

btnClr.addEventListener('click', () =>
{
    clear();
    res.innerHTML = '';
});

btnEql.addEventListener('click', () =>
{
    if(!num1 || !operand || !num2) return;

    const result = eval(parseInt(num1, 10) + operand + parseInt(num2, 10));
    clear();
    res.innerHTML = result;
});

btnSum.addEventListener('click', (e) => setOperand(e.target.value));
btnSub.addEventListener('click', (e) => setOperand(e.target.value));
btnMul.addEventListener('click', (e) => setOperand(e.target.value));
btnDiv.addEventListener('click', (e) => setOperand(e.target.value));
