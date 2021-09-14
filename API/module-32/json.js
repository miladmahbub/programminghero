// javascript object notation 
// json
const user ={
    id:11,
    name:'milad',
    job:'programmer'
}
const stringfied = JSON.stringify(user);
// console.log(user);
// console.log(stringfied);
 const shop ={
     name:'amar bafor dukan',
     addres:'zakigong syl',
     products:['laptop','mobile','pepsi'],
     iexpenive: false
 }
 const shopstringified = JSON.stringify(shop);
//  console.log(shop);
//  console.log(shopstringified);

// JSON কে জাভাসসচ্রিপ্ত অবজেকট এ রুপান্থর করার সিস্টেম

const convert = JSON.parse(shopstringified);
const convert = JSON.parse(shopstringified);
console.log(convert.products);

