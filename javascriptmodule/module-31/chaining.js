
// declare variable based on the name of an object property  

const myobject ={x:10,y:234,z:97}
const {x,y,z}= myobject;
// console.log(x,y,z);

// destructuring array 
const [p,q] = [45,37,234,12]
console.log(p,q);

// chaining 

const company = {
    name:'royal IT',
    ceo:{id: 6, name:'molad'},
    web:{work:'web application programmer',employee:22, framework:'react',
    tech:{
    first:"html",
    second:"css"

}}
};
console.log(company.web.tech.second);
console.log(company.backend.tech.second);
// optional chaining 
console.log(company?.web?.tech?.second);
console.log(company?.backend?.tech.second);