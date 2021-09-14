var gotjob = true;

if (gotjob == true) {
    console.log("cholo bia kore feli")
    
}
else{
    console.log("tor kopale bia nai")
}


// AND CONDITION 

var gotjob = true;
 var moneyaved = 150000;
 var hasflat = true;

if (gotjob == true && moneyaved >200000 && hasflat == true) {
    console.log("cholo bia kore feli")
    
}
else{
    console.log("tor kopale bia nai")
}


// OR condition 
var gotjob = true;
 var moneyaved = 150000;
 var hasflat = true;
 

if (gotjob == true || moneyaved >200000 ) {
    console.log("cholo bia kore feli")
    
}
else{
    console.log("tor kopale bia nai")
}


// complex OR operator 
var gotjob = true;
 var moneyaved = 150000;
 var hasflat = true;
 var hashouse = true;
 

if ((gotjob == true || moneyaved >200000) ||hashouse == true ) {
    console.log("cholo bia kore feli")
    
}
else{
    console.log("tor kopale bia nai")
}