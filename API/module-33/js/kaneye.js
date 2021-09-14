const loadquotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data => displayquote(data));
}

const displayquote = quote =>{
const displayonquote = document.getElementById('quote')
displayonquote.innerText = quote.quote;
}

