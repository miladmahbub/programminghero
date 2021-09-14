function add (num1 ,num2 = 5){

    num2 = num2||0 ;

    // if (num2 = undefined){
    //     num2 = 5;
    // }
    const add = num1 + num2 ;
    return add;
}
const total = add(5);
// console.log(total);

function addname (firstname ,secondname =" mahbub"){

    const addname =firstname + " " + secondname;
    return addname;
}
const fullname = addname("milad");
console.log(fullname);