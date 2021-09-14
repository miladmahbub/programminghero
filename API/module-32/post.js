function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>displypost(data))

}
loadpost();

function displypost(posts){
    const postcontainer = document.getElementById('post-container')
    for(const post of posts){
        const div =document.createElement('div')
        div.innerHTML =`
        <h3>${post.title}</h3>
        <p>${post.body}</p>`;
        postcontainer.appendChild(div);
        console.log(postcontainer);
    }
}