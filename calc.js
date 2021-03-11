let calcNumBtns = document.getElementsByClassName('num')
let calcOpeBtns = document.getElementsByClassName('ope')

let decimalBtn = document.getElementById('decimal');
let clearBtn = document.getElementById('clear');
let backBtn = document.getElementById('backspace');
let displayValElement = document.getElementById('display-val')
let eq = document.getElementById('equals')
let inv=document.getElementById('invert')

let displayVal = '0';
let pendingVal = 0;

let opp;

function updateDisplayVal(clickObj) {
    let btnText = clickObj.target.innerText;
    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;

console.log(displayVal);
}
let ope = ''

const perform = (clickObj) => {
    ope = clickObj.target.innerText;

    pendingVal += +displayVal;
    // displayValElement.innerText = '0';
    displayVal = '';

}
let ans;
eq.onclick = (e) => {
    displayVal = displayValElement
    if (ope === '+') {
        ans = +pendingVal + +displayValElement.innerText;
        displayValElement.innerText = ans;
        console.log(ans);
    }
    else if (ope === '-') {
        ans = +pendingVal - +displayValElement.innerText;
        displayValElement.innerText=ans;
        console.log(ans);
    }
    else if (ope === 'x') {
        ans = +pendingVal * +displayValElement.innerText;
        displayValElement.innerText=ans;
        console.log(ans);
    }
    else if (ope === '÷') {
        ans = +pendingVal / +displayValElement.innerText;
        displayValElement.innerText= +ans;
        console.log(ans);
    }
    if (ope==='%'){
        if (displayValElement==0){
            // ans=;
        }
        ans = +pendingVal / +displayValElement.innerText;
        
    }

}


for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
for (i = 0; i < calcOpeBtns.length; i++) {
    calcOpeBtns[i].addEventListener('click', perform, false);
    // console.log(calcOpeBtns);
}
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = 0;

    displayValElement.innerText = displayVal;

}
backBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    if (displayVal === '')
        displayVal = '0';

    displayValElement.innerText = displayVal;
}
decimalBtn.onclick = () => {
    if (!displayVal.includes('.')){
        displayVal += '.';
        displayValElement.innerText = displayVal;
    }
}
inv.onclick=()=>{
        displayValElement.innerText = displayValElement.innerText*(-1);
}

