#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { messege: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exp" , "Modules"],
  },
]);

// conditional statement
if (asnwer.operator === "Addition") {
 console.log(asnwer.firstnumber + asnwer.secondnumber);
} else if (asnwer.operator === "Subtraction") {
  console.log(asnwer.firstnumber - asnwer.secondnumber);
} else if (asnwer.operator === "Multiplication") {
  console.log (asnwer.firstnumber * asnwer.secondnumber);
}    
else if (asnwer.operator === "Division") {
  console.log(asnwer.firstnumber / asnwer.secondnumber);
}  else if (asnwer.operator === "Exp"){
  console.log (asnwer.firstnumber ** asnwer.secondnumber)
} else if (asnwer.operator === "Modules"){
  console.log (asnwer.firstnumber % asnwer.secondnumber)
}else {
   console.log("please select valid operator")
}

console.log("THE END")
