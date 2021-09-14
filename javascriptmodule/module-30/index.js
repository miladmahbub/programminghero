document.getElementById('border-button').addEventListener('click',function(){
    const container = document.getElementById("friend-container")
    container.style.border = '2px solid red';

});
function addbackgroundcolor(){
    const friends =document.getElementsByClassName('friend');
    for ( const friend of friends ){
        friend.style.backgroundColor ='yellow';
    }
}
document.getElementById('add-friend').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    const frienddiv = document.createElement('div');
    // frienddiv.classLlist.add("friend");
    
    frienddiv.innerHTML = `<h3 class="friend-name">new friend</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    `;
    container.appendChild(frienddiv);
})

