class support{
    name;
    addres ='bd'
    constructor(name,addres){
    this.name = name;
    this.addres =addres;
    }
    role ='support web dev';
    startsession(){
        console.log(this.name,'start a session');
    }
}
const aamir = new support('amir khan','bd');
const salman = new support('solaiman khan','dubai');
// console.log(salman);
// console.log(aamir);
aamir.startsession();
salman.startsession();