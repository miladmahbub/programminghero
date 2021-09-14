function getinputvalue(inputid){
    const inputfield = document.getElementById(inputid);
    const inputamounttext = inputfield.value;
    const amountvalue = parseFloat(inputamounttext);
    //  clear input field 
    inputfield.value = '';
    return amountvalue;
}


function updatetotalfield(totalfieldid , amount){
    const totalelement = document.getElementById(totalfieldid);
    const totaltext = totalelement.innerText;
    const previoustotal = parseFloat(totaltext);
    totalelement.innerText = previoustotal + amount;
}

function updatebalance(depositamount ,isadd){
    const balancetotal = document.getElementById('balance-total');
    const balancetotaltext = balancetotal.innerText;
    const previoubalancetotal = parseFloat(balancetotaltext);
    
    if(isadd == true){
        balancetotal.innerText = previoubalancetotal + depositamount;

    }
    else{
        balancetotal.innerText = previoubalancetotal - depositamount;
    }
}




document.getElementById('deposit-button').addEventListener('click', function () {
    // const deposiinput = document.getElementById('deposit-input');
    // const depositamounttext = deposiinput.value;
    // const depositamount = parseFloat(depositamounttext);
    const depositamount = getinputvalue("deposit-input");

    // get and update deposit total
    // const deposittotal = document.getElementById('deposit-total');
    // const deposittotaltax = deposittotal.innerText;
    // const previousdeposittotal = parseFloat(deposittotaltax);
    // deposittotal.innerText = previousdeposittotal + depositamount;
     updatetotalfield('deposit-total', depositamount);


    // update balance

    // const balancetotal = document.getElementById('balance-total');
    // const balancetotaltext = balancetotal.innerText;
    // const previoubalancetotal = parseFloat(balancetotaltext);
    // balancetotal.innerText = previoubalancetotal + depositamount;
    updatebalance(depositamount ,true);
    
});
//  handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawinput = document.getElementById('withdraw-input');
    // const withdrawamounttext = withdrawinput.value;
    // const withdrawamount = parseFloat(withdrawamounttext);

    const withdrawamount = getinputvalue('withdraw-input');

    //get and  update withdraw total 
    // const withdrawtotal = document.getElementById('withdraw-total');
    // const previouswithdrawtotaltext = withdrawtotal.innerText;
    // const previouswithdrawtotal = parseFloat(previouswithdrawtotaltext);
    // withdrawtotal.innerText = previouswithdrawtotal + withdrawamount;


    updatetotalfield('withdraw-total',withdrawamount );

    

    // update balance after withdraw 
    //  const balancetotal = document.getElementById('balance-total');
    //  const balancetotaltext = balancetotal.innerText;
    //  const previousdeposittotal = parseFloat(balancetotaltext);
    //  balancetotal.innerText = previousdeposittotal - withdrawamount;
    updatebalance(withdrawamount ,false);


    // //  clear input field 
    // withdrawinput.value = '';
});