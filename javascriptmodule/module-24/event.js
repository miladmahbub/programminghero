// <!-- system two event handeler  -->

function makered() {
    document.body.style.backgroundColor = "red";
}


// <!-- system three event handeler -->


const bluebutton = document.getElementById("make-blue-button")
bluebutton.onclick = makeblue;

function makeblue() {
    document.body.style.backgroundColor = 'blue';
}

// <!-- system four event handeler annonymas function-->

const greenbutton = document.getElementById("make-green-button");
greenbutton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// <!-- system five event handeler --> 

const goldenbutton = document.getElementById("make-goldenrod");

goldenbutton.addEventListener('click', function makegoldenrod() {
    document.body.style.backgroundColor = "hotpink";
});


// const goldenbutton = document.getElementById("make-goldenrod");

// goldenbutton.addEventListener('click', makegoldenrod);

// function makegoldenrod() {
//     document.body.style.backgroundColor = "hotpink";
// }

// <!-- system six event handeler shortcut way --> 


document.getElementById("light-blue").addEventListener("click" , function(){
    document.body.style.backgroundColor ="Chartreuse";
})
