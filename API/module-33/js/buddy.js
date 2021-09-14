const loadbuddis = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => displaybuddies(data))
}
loadbuddis();

const displaybuddies = (data) => {
    const buddies = data.results;
    const buddiesdiv = document.getElementById('buddy')
    for (const buddy of buddies) {
        // console.log(buddy.email ,buddy.name.first,buddy.name.last)
        const p = document.createElement('p')
        p.innerText =`
        name:${buddy.name.first} ${buddy.name.last}
        email:${buddy.email}
        location:${buddy.location.city}`;
        buddiesdiv.appendChild(p);
    }
}