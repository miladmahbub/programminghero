function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstring = pin + '';
    if (pinstring.length == 4) {
        return pin;
    } else {
        // console.log('got 3 digit and calling again', pin);
        return getpin();
    }
}

function generatepin() {
    const pin = getpin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcinput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcinput.value = '';
        }
    } else {

        const previousnumber = calcinput.value;
        const newnumber = previousnumber + number;
        calcinput.value = newnumber;


    }



});

function veryfypin() {
    const pin = document.getElementById('display-pin').value;
    const typednumbers = document.getElementById('type-numbers').value;
    const successmessage = document.getElementById('notify-success');
    const failerror = document.getElementById('notify-fail');


    if (pin == typednumbers) {

        successmessage.style.display = 'block';
        failerror.style.display = 'none';
    } else {
        successmessage.style.display = 'none';
        failerror.style.display = 'block';
    }
}