import inquirer from "inquirer";
let condition = true;
// let ans = await inquirer.prompt([
//     {
//         message:"Enter your name :",
//         type:"input",
//         name:"Studen_Name"
//     },
//     {
//         message:"Please select the course name :",
//         type:"list",
//         name:"Course_Name",
//         choices:["Web Development","App Development","AI Engineering"]
//     },
//     {
//         message:"Enter the fees of this Course :",
//         type:"input",
//         name:"Fees"
//     }
// ])
// let Balance:number=10000
// let Fee:number=0
// let EnrolledNumber:number= Math.floor(13832 + Math.random()* 100)
//console.log(EnrolledNumber);
//let payfees=Balance - ans.Fees
// let Student_Detail={
//     Name:`${ans.Studen_Name}`,
//     Rollno:`${EnrolledNumber}`,
//     Course:`${ans.Course_Name}`,
//     Payfee:`${payfees}`,
//}
//console.log(Student_Detail);
do {
    let ans = await inquirer.prompt([
        {
            message: "Enter your name :",
            type: "input",
            name: "Studen_Name"
        },
        {
            message: "Please select the course name :",
            type: "list",
            name: "Course_Name",
            choices: ["Web Development", "App Development", "AI Engineering"]
        },
        {
            message: "Enter the fees of this Course only 4500 rupees :",
            type: "input",
            name: "Fees",
        }
    ]);
    //let Balance:number=10000
    let Fee = 4500;
    if (ans.Fees >= 4500) {
        console.log("Congratulation! You enrolled this course ");
    }
    else {
        console.log("Please first pay the fees");
        break;
    }
    let EnrolledNumber = Math.floor(13832 + Math.random() * 100);
    //let payfees=Balance - ans.Fees
    let status = await inquirer.prompt([
        {
            message: "What you see the status of stutend",
            type: "input",
            name: "answer",
            default: "yes",
        }
    ]);
    let cond = "yes";
    let con = "yes";
    let Student_Detail = {
        Name: `${ans.Studen_Name}`,
        Rollno: `${EnrolledNumber}`,
        Course: `${ans.Course_Name}`,
        Payfee: `${ans.Fees}`,
    };
    if (status.answer == "yes") {
        console.log(Student_Detail);
    }
    else {
        break;
    }
    let checkup = await inquirer.prompt([
        {
            message: "What you continue this program (yes/no) :",
            type: "input",
            name: "ConCheck"
        }
    ]);
    if (checkup.ConCheck == cond) {
        console.log("Ok continue this program ");
    }
    else {
        break;
    }
} while (condition);
