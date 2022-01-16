
// -----TASK 1------ // 

class Student{
    constructor (name, email, community) {
        this.name = name; 
        this.email = email;
        this.community = community;
    }
}

class Bootcamp{
    constructor (name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }


// -----TASK 2------ // 


registerStudent(studentToRegister){
    const registeredStudents = this.students.filter(student => student.email === studentToRegister.email);
    if(registeredStudents.length > 0) {
        console.log(`The student ${studentToRegister.email} is already registered!`)
    } else {
        this.students.push(studentToRegister);
        console.log(`Registering ${studentToRegister.email} to the bootcamp  ${this.name}`);
    }
 
    return this.students;
}
}



// -----TASK 3------ // 
const webDevFundamentals = new Bootcamp('Web Development Fundamental','Beginner');
const Sara = new Student("Sara",'sara@matrix.org','Florida');
webDevFundamentals.registerStudent(Sara)
const Martin = new Student("Martin",'martin@matrix.org','Texas');
webDevFundamentals.registerStudent(Martin)
const Amelie = new Student("Amelie",'amelie@matrix.org','Connecticut');
webDevFundamentals.registerStudent(Amelie)

