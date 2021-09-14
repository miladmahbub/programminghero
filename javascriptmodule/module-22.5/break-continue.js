const products = [

    {name :"ssamsung s3 phone , price: 12000"},
    {name :"vivo phone , price: 14000"},
    {name :"realme c3 phone , price: 17000"},
    {name :"nokia watch , price: 19000"},
    {name :"iphone12 phone , price: 120000"},
    {name :"shawmiphone , price: 72000"},
    {name :"walton watch , price: 92000"}
]

// for(const product of products){
//     if (product.price < 20000){
//         break;
//     }
//     console.log(product);
// }

for (const product of products){
    if (product.price < 20000)
    {
        continue;
    }
    console.log(product);
}