class Student{
   constructor(name, isAvailable){
      this.name = name;
      this.isAvailable = isAvailable;
   }
   
   updateName(name){
      this.name = name
   }
 }
 
 class Teacher{
   constructor(name){
      this.name = name
      this.students = []
   }
  
   addStudent(student){
      this.students.push(student)
   }
   
   printStudents(){
      console.log(this.students)
   }

   findStudent(name){
      for (let i = 0; i < this.students.length; i++){
         if(this.students[i].name === name && this.students[i].isAvailable === false){
            return 'Student not available'
         } else {
            return "Student not found"
         }
      }
   }
 }

let student1 = new Student('Sandra', true)
student1.updateName('Federico')
console.log(student1)
let student2 = new Student('Gunner', false)
console.log(student2)
let student3 = new Student('Juan', false)
console.log(student3)

let teacher = new Teacher('Teresa')
teacher.addStudent(student1)
teacher.addStudent(student2)
teacher.addStudent(student3)
teacher.printStudents()

let output1 = teacher.findStudent('Juan')
console.log(output1) 

console.log(teacher.findStudent('Juan'))
console.log(teacher.findStudent('Federico'))
