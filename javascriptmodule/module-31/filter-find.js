const numbers = [1,4,7,9,3]
const bignumber =numbers.filter(num => num>5);
// console.log(bignumber);



const products =[
    {name:'water bottle',price:100,color:'yellow'},
    {name:'mobile phone',price:15000,color:'black'},
    {name:'smart-watch',price:3000,color:'black'},
    {name:'sticky note',price:30,color:'pink'},
    {name:'water glass',price:3,color:'white'}
    ];

    const expensive = products.filter(product =>product.price > 50);
    const blacks = products.filter(product =>product.color =='black');
    const blacks = products.filter(product =>product.color =='blue');
    const blacks = products.filter(product =>product.color =='pink');
    console.log(blacks);



    // find 
    const whiteitem =products.find(product =>product.color=="pink");
    const whiteitem =products.find(product =>product.color=="blue");
    console.log(whiteitem);
