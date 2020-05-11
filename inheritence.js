class Father{
    constructor(){
        this.fatherName = "Akhtaruzzaman";
    }
}



class Child extends Father {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}
const baby = new Child("Ambreen");
const baby2 =new Child ("Azreen");
console.log(baby.getFullName(), baby2);