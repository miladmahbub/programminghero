// var marks = 70;
// if(marks >= 80 ){
//     console.log("you got A+");

// }
// else if (marks >= 70){
//     console.log("you got A");
// }
// else if(marks >= 60){
//     console.log("you got A-");
// }
// else if(marks>=50){
//     console.log("you got b+");
// }
// else if (marks >= 40){
//     console.log("you got c");
// }
// else{
//     console.log("you are dabba");
// }



// let i = 0;

// while( i <= 10){
//     console.log("hello bangladesh" +i)
//     i++;
// }

// 

// var friendsname = ["karim","rahim","fahim","hakim"]
// // for (var i = 0; i< friendsname.length; i++){
//     // var item = friendsname[i]
//     // console.log(item);
//     // console.log(friendsname.length);
//     // 

//     console.log(friendsname.push("milad"));
//     console.log(friendsname.push("fahad"));
//     console.log(friendsname.push("munni"));
//     console.log(friendsname.pop());
//     console.log(friendsname.unshift("mahi"));
//     console.log(friendsname.shift("mahi"));

//     console.log(friendsname.length);
//     console.log(friendsname);


// // function bringsingara (taka){
//     console.log("singara er jonno teya dise:",taka);
//     console.log("singara den mama");

// }
// // var moneye = 250;
// bringsingara(300);


// function addtwonumber(num1, num2) {
//     var result = num1 + num2;
//     var result = num2 * num2;
//     return result;
// }
// // var number1 = 300;
// // var number2 = 200;
// console.log(addtwonumber(300, 200));


// var student = {
//     name : "milad",
//     roll:102020,
//     home:"zakigong",
//     phonenumber:01273637636
//     }
//     // var students = student;
//     // console.log(student);
//     console.log(student.phonenumber);
//     console.log(student.home);
//     student.roll = 108030;
//     student["roll"] = 304050;
//     console.log(student);


// var factorial = 1;
// for (var i = 1; i<=5; i++){
//     factorial = factorial * i;

// }
// console.log(factorial);


// function factorialcount(num){
//     var factorial = 1;
//     for(var i = 1; i <=num; i++){
//         factorial = factorial * i;
//     }
//     console.log(factorial);
// }
// factorialcount(7);

var num = [10,11,12,13,14,15,16,17]
function maxnumber(num){
    var maxnumber = num[0];
    for(let element of num){
        if(element > maxnumber){
            maxnumber = element;
        };
    }
 console.log(maxnumber);
}
maxnumber(num);



var num = [10,11,12,13,14,15,16,17]
function lowestnumber(num){
    var lowestnumber = num[0];
    for(let element of num){
        if(element < lowestnumber){
            lowestnumber = element;
        };
    }
 console.log(lowestnumber);
}
lowestnumber(num);

