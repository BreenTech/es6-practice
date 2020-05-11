class student{
    constructor(sId, sName, sGroup){
        this.id = sId;
        this.name = sName;
        this.group = sGroup;
        this.school = "Nandipara high School"
    }
}

const student1 = new student(1, "viki", "A");
const student2 = new student(2, "samina", "A");
const student3 = new student(3, "ambi", "B");
console.log(student1, student2, student3);