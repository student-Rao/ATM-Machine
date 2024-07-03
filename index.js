#! /usr/bin/env node
import inquirer from "inquirer";
let totalamount = 10000;
console.log(`Your current balance is: ${totalamount}`);
let pin = 33146;
let answer = await inquirer.prompt([
    {
        message: "Enter your pin:",
        type: "number",
        name: "password"
    },
]);
if (pin == answer.password) {
    console.log("correct pin code");
    let answer2 = await inquirer.prompt([
        {
            message: "What do you wnat to do:",
            type: "list",
            name: "operation",
            choices: ["Withdraw", "Checkbalance"]
        },
    ]);
    if (answer2.operation == "Withdraw") {
        let answer3 = await inquirer.prompt([
            {
                message: "Enter Amount",
                type: "number",
                name: "Amount"
            }
        ]);
        if (answer3.Amount > 10000) {
            console.log(`You don't withdraw ${answer3.Amount} because your account balance is only ${totalamount}`);
        }
        else {
            totalamount -= answer3.Amount;
            console.log(`Your remaining balance is ${totalamount}`);
        }
    }
    else {
        console.log(`Your remaining balance is ${totalamount}`);
    }
}
else {
    console.log("This code is not correct");
}
