#! /usr/bin/env node
import inquirer from "inquirer";
//COMPUTER GENERATE A NUMBER
const randomNumber = Math.floor(Math.random() * 6 + 1);
//console.log(randomNumber);
//USER GUESSING NUMBER
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 -6",
    },
]);
//COMPARING BOTH NUMBER
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
