const countriesload =() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>console.log(data))
}
countriesload();

const displaycountries = countries =>{
    console.log(countries)
}