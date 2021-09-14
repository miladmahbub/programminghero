const products = [

    {name :"ssamsung s3 phone , price: 12000"},
    {name :"vivo phone , price: 14000"},
    {name :" realme c3 phone , price: 17000"},
    {name :" nokia watch , price: 19000"},
    {name :" iphone12 phone , price: 120000"},
    {name :" shawmiphone , price: 72000"},
    {name :" walton watch , price: 92000"}
]

function searchproducts(products,searchtext){
    const matched = [];
    for (const product of products){
        const name = product.name;
        // console.log(product.name);
        if (name.indexOf(searchtext) != -1){
            // console.log(name);
            matched.push(product);
        }
    }
    return matched;
}
const matched =  searchproducts(products, "watch");
console.log(matched);