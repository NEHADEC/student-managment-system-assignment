// import inquirer from "inquirer";
// class student {
//     static counter = 10000 ;
//     id : number;
//     name: string;
//     courses: string[];
//     balance: number;
//     constructor (name: string){
//         this.id = student.counter++;
//         this.name = name;
//         this.courses = [];  //Initialize an empty array for courses
//         this.balance = 100;
//     }
//     // method to enroll a student in a course
//     enroll_course(course: string){
//         this.courses.push(course);
//     }
//     //method to view a student balance
//     view_balance(){
//         console.log(`balance for ${this.name} : ${this.balance}`);
//     }
//     //method to pay student fees
//     pay_fees(amount: number){
//         this.balance -= amount;
//         console.log(`$${amount} fees paid successfully for ${this.name}`);
//         //method to display student status
//     }
//     show_status() {
//             console.log(`ID: ${this.id}`);
//             console.log(`Name: ${this.name}`);
//             console.log(`Courses: ${this.courses}`);
//             console.log(`Balance: ${this.balance}`);
//     }
// }
// //defining a student-manager class to manage students
// class student_manager {
//     students: student[]
//     constructor(){
//         this.students = [];
//     }
//     //method to add a new student
//     add_student(name: string){
//         let student = new this.student(name);
//         this.students.push(student);
//         console.log(`student: ${name} added successfully. student ID: ${student.id}`);
//     }
//     //method to enroll a student in a course
//     enroll_student(student_id: number, course: string){
//         let student = this.find_student(student_id)
//         if (student){
//             student.enroll_course(course);
//             console.log(`${student.name} enrolled in ${course} successfully`);
//         }
//     }
//     //method to view a student balance
//     view_student_balance(student_id: number){
//         let student = this.find_student(student_id)
//      if (student){
//         student.view_balance();
//      }
//      else{
//         console.log("student not found. please enter a correct student ID");
//      }
//     }
//     //method to display student status
//     show_student_status(student_id: number){
//         let student = this.find_student(student_id);
//         if (student){
//             student.show_status();
//         }
//     }
//     //method to find a student by student_id
//     find_student(student_id: number){
//         return this.students.find(std => std.id === student_id)
//     }
// }
// //main function to run the program
// async function main(){
//     console.log("welcome to 'codewith neha' - student management system");
//     console.log('-'.repeat(50));
//     let student_manager = new student_manager();
//     //while loop to keep program running
//     while(true){
//         let choice = await inquirer.prompt([
//             {
//                 name: "choice",
//                 type: "list",
//                 message: "select an option",
//                 choices: [
//                     "Add student",
//                     "Enroll student",
//                     "View student balance",
//                     "pay fees",
//                     "show status",
//                     "Exit"
//                 ]
//             }
//         ]);
//         //using switch case to handle user choices
//         switch(choice.choice){
//             case "Add student";
//             let name_input = await inquirer.prompt([
//                 {
//                     name : "name",
//                     type: "input",
//                     message: "enter a student name",
//                 }
//             ]);
//             student_manager.add_student(name_input.name);
//             break;
//             case "Enroll student":
//                 let course_input = await inquirer.prompt([
//                     {
//                         name: "student_id",
//                         type: "number",
//                         message: "Enter a student ID",
//                     },
//                     {
//                         name: "course",
//                         type: "input",
//                         message: "Enter a course name",
//                     }
//                 ]);
//                 student_manager.enroll_student(course_input.student_id, course_input.course);
//                 break;
//                 case "view student Balance":
//                     let balance_input = await inquirer.prompt([
//                         {
//                             name: "student_id",
//                             type: "number",
//                             message: "Enter a student ID"
//                         }
//                     ]);
//                     student_manager.view_student_balance(balance_input.student_id);
//                     break;
//                     case "pay fees":
//                         let fees_input = await inquirer.prompt([
//                             {
//                                 name: "student_id",
//                                 type: "number",
//                                 message: "Enter a student ID",
//                             },
//                             {
//                                 name: "amount",
//                                 type: "number",
//                                 message: "Enter the amount to pay"
//                             }
//                         ]);
//                         student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
//                         break;
//                         case "show status":
//                             let status_input = await inquirer.prompt([
//                                 {
//                                     name: "student_id",
//                                     type: "number",
//                                     message: "Enter a student ID"
//                                 }
//                             ]);
//                              student_manager.show_student_status(status_input.student_id);
//                              break;
//                              case "Exit";
//                              console.log("Exiting...");
//                              process.exit();
//         }
//     }
// }
// //calling a main function
// main();
import inquirer from "inquirer";
class student {
    static counter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = student.counter++;
        this.name = name;
        this.courses = []; //Initialize an empty array for courses
        this.balance = 100;
    }
    // method to enroll a student in a course
    enroll_course(course) {
        this.courses.push(course);
    }
    //method to view a student balance
    view_balance() {
        console.log(`balance for ${this.name} : ${this.balance}`);
    }
    //method to pay student fees
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount} fees paid successfully for ${this.name}`);
        //method to display student status
    }
    show_status() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
    }
}
//defining a student-manager class to manage students
class student_manager {
    students;
    constructor() {
        this.students = [];
    }
    //method to add a new student
    add_student(name) {
        let newStudent = new student(name);
        this.students.push(newStudent);
        console.log(`student: ${name} added successfully. student ID: ${newStudent.id}`);
    }
    //method to enroll a student in a course
    enroll_student(student_id, course) {
        let student = this.find_student(student_id);
        if (student) {
            student.enroll_course(course);
            console.log(`${student.name} enrolled in ${course} successfully`);
        }
    }
    //method to view a student balance
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("student not found. please enter a correct student ID");
        }
    }
    //method to display student status
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_status();
        }
    }
    //method to find a student by student_id
    find_student(student_id) {
        return this.students.find(std => std.id === student_id);
    }
    //method to pay student fees
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
    }
}
//main function to run the program
async function main() {
    console.log("welcome to 'codewith neha' - student management system");
    console.log('-'.repeat(50));
    let manager = new student_manager();
    //while loop to keep program running
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option",
                choices: [
                    "Add student",
                    "Enroll student",
                    "View student balance",
                    "pay fees",
                    "show status",
                    "Exit"
                ]
            }
        ]);
        //using switch case to handle user choices
        switch (choice.choice) {
            case "Add student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "enter a student name",
                    }
                ]);
                manager.add_student(name_input.name);
                break;
            case "Enroll student":
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID",
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter a course name",
                    }
                ]);
                manager.enroll_student(course_input.student_id, course_input.course);
                break;
            case "View student balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID"
                    }
                ]);
                manager.view_student_balance(balance_input.student_id);
                break;
            case "pay fees":
                let fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay"
                    }
                ]);
                manager.pay_student_fees(fees_input.student_id, fees_input.amount);
                break;
            case "show status":
                let status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID"
                    }
                ]);
                manager.show_student_status(status_input.student_id);
                break;
            case "Exit":
                console.log("Exiting...");
                process.exit();
        }
    }
}
//calling a main function
main();
