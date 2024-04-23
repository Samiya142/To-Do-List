#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
console.log(chalk.blue.bold("\n \t Welcome to todo list Aplication by Samiya.\n"));
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "Task",
            type: "input",
            message: "Please enter a task in your todo list"
        },
    ]);
    todoList.push(addTask.Task);
    console.log(`"${addTask.Task}" added to todo list successfully!`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "moreTask",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "True"
        }
    ]);
    condition = addMoreTask.moreTask;
}
console.log("Your updated todo list:", todoList);
