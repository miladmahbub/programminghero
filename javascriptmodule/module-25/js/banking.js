// handle deposit button event 

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');

    const newdepositAmounttext = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmounttext);
    // console.log(depositAmount);


    // update deposit total 

    const deposittotal = document.getElementById('deposit-total');

    const previousdeposittext = deposittotal.innerText;

    const previousdepositamount = parseFloat(previousdeposittext);

    const newdeposittotal = previousdepositamount + newdepositAmount;



    deposittotal.innerText = newdeposittotal;

    // update account balance 
    const balancetotal = document.getElementById('balance-total');
    const balancetotaltext = balancetotal.innerText;
    const previousbalancetotal = parseFloat(balancetotaltext);
    const newbalancetotal = previousbalancetotal + newdepositAmount;
    balancetotal.innerText = newbalancetotal;

    // clear the input field 
    depositInput.value = '';
});

// handle withdraw event handeler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw click')
    const withdrawinput = document.getElementById('withdraw-input');
    const withdrawamounttext = withdrawinput.value;
    const newwithdrawamount = parseFloat(withdrawamounttext);
    console.log(newwithdrawamount);


    // set withdraw total 
    const withdrawtotal = document.getElementById('withdraw-total');
    const previouswithdrawtext = withdrawtotal.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtext);

    const newwithdrawtotal = previouswithdrawtotal + newwithdrawamount;

    withdrawtotal.innerText = newwithdrawtotal;

    // update balance 
    const balancetotal = document.getElementById('balance-total');
    const previousbalancetext = balancetotal.innerText;
    const previousbalancetotal = parseFloat(previousbalancetext);
    const newbalancetotal = previousbalancetotal - newwithdrawamount;
    balancetotal.innerText = newbalancetotal;

    // clear the input field 

    withdrawinput.value = '';

});