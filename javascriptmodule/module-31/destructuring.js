const fish ={
    id:54,
    name:"king elisha",
    price: 4500,
    phone: '036465646',
    address:'chandpur',
    dress:'silver',
};

// চার লাইন লিখে ডআটা নিয়ে আসা 


// const phone = fish.phone;
// const price = fish.price;
// const address =fish.address;
// const id = fish.id;


// আর ডিস্ত্রুছিং করে এক্লাইনে ডাটা নিয়ে আহা কে দেস্ত্রুছিং বলে

const {phone,price,id,address} = fish;

// console.log(phone,price);
// console.log(phone,address);
// console.log(phone);
// console.log(phone,id);
// console.log(phone);

const company = {
    name:'royal IT',
    ceo:{id: 6, name:'molad'},
    web:{work:'web application programmer',employee:22, framework:'react'}
};

// lenthy process 
// const work = company.web.work;
// const framework = company.web.framework;

// shortcut process 
const {work,framework} = company.web;
const {food} =company.ceo;
console.log(work,framework,food);