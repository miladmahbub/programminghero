// function loaddata(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(Response =>Response.jon())
//     .then(json => console.log(json));
// }
function postdata(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>displayusers(data));
}
function displayusers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li');
        // li.innerText =user.name;
        li.innerText =`name :${user.name}, email:${user.email}`;
        ul.appendChild(li);
    }
    

}

function loadimages(){
    fetch('https://jsonplaceholder.typicode.com/photos')
     .then(res =>res.json())
     .then(data =>imagedata(data))
}
function imagedata(data){
    const ul =document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        // li.innerText =user.title;
        li.innerText =`title:${user.title} ,${user.thumbnailUrl}`;
        ul.appendChild(li);

    }
}