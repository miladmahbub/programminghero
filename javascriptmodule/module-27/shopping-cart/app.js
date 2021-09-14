function updateproductnumber(product ,price, isincreasing){
    const productinput = document.getElementById(product +'-number');
    let productnumber = productinput.value;
    if(isincreasing){
        productnumber =parseInt(productnumber) + 1; 
    }else if(productnumber > 0){
        productnumber =parseInt(productnumber) - 1;
    }
    productinput.value = productnumber;
    // update  total 
   const producttotal = document.getElementById(product +'-total');
    producttotal.innerText =productnumber * price;
    // calculate  total 
    calculatetotal();

}

function getinputvalue(product){
    const productinput = document.getElementById(product ,'-number').value;
    const productnumber =parseInt(productinput.value);
    return productnumber;
}


function calculatetotal(){
    
    const phonetotal = getinputvalue("phone") * 1219;
    const casetotal = getinputvalue("case") *59;
    const subtotal = phonetotal + casetotal;
    console.log(subtotal);
    
    // update on the html 
    document.getElementById('sub-total').innerText = subtotal;
}



// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateproductnumber('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateproductnumber('phone',1219,false);
});


// handle case increase decrease event 

document.getElementById('case-plus').addEventListener('click', function(){

// const caseinput = document.getElementById('case-number');
// const casenumber = caseinput.value;
// caseinput.value =parseInt(casenumber) + 1;
// console.log(casenumber);
updateproductnumber('case',59,true);


});

document.getElementById('case-minus').addEventListener('click',function(){
    // const caseinput = document.getElementById('case-number');
    // const casenumber = caseinput.value;
    updateproductnumber('case',59,false);
    // caseinput.value =parseInt(casenumber) - 1;
});