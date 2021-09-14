const friends =['kawsar','munna','mahbub','ishmama'];
const flength =friends.map(friends => friends.length);
// console.log(flength);

const products =[
    {name:'water bottle',price:100,color:'yellow'},
    {name:'mobile phone',price:15000,color:'black'},
    {name:'smart-watch',price:3000,color:'black'},
    {name:'sticky note',price:30,color:'pink'},
    {name:'water glass',price:3,color:'white'}
    ]
    const productname =products.map(prod => prod.name);
    const productprice = products.map(proprice => proprice.price);
    console.log(productname,productprice );