const countriesload = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displaycountries(data))
}
countriesload();

const displaycountries = countries => {
    const countrydiv = document.getElementById('countries');
    // for(const country of countries){
    //     console.log(country)
    // }
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
       <button onclick="loadcountrydetail('${country.name}')">show details</button> `
        // const h3 = document.createElement('h3');
        // div.classList.add('country')
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // // countrydiv.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        // countrydiv.appendChild(p);
        countrydiv.appendChild(div);
    });

}

const loadcountrydetail = name => {
    const url = `
    https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaycountrydetails(data[0]))
}

const displaycountrydetails = country =>{
     console.log(country)
     const countrydiv = document.getElementById('country-detail')
     countrydiv.innerHTML =`
     <h5>${country.name}</h5>
     <p>population:${country.population}</p>
     <img width="200" src="${country.flag}"  alt="">
     `
}