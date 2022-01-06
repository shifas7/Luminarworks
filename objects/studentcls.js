class student{
    constructor(name,age,gender,course){
        this.name=name;
        this.age=age;
        this.gender=gender
        this.course=course
    }
    printStudent(){
        console.log(this.name,this.age,this.gender,this.course);
    }
}

var obj=new student("shifas",21,"male","mean")
obj.printStudent()

var obj1=new student("ghh",23,"male","python")
obj1.printStudent()
