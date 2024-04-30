import inquirer from 'inquirer';
let todolist = [];
let condition = true;
while (condition) {
    let Task = await inquirer.prompt([
        {
            name: 'todolist',
            type: 'input',
            message: "add items in list"
        },
        {
            name: 'add',
            type: 'confirm',
            message: 'add more ',
            default: 'false'
        }
    ]);
    todolist.push(Task.todolist);
    condition = Task.add;
    console.log(todolist);
}
