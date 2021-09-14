function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displaypost(data))
}
loadpost();


function displaypost(posts) {
    const postcontainer = document.getElementById('post-container')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</P>
`;
        postcontainer.appendChild(div);
        console.log(postcontainer);

    }
}