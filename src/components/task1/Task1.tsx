import React from 'react';
import {App, Project, Task, User} from "./app";

const Task1 = () => {
    const user1 = new User("Eric");
    const users2 = new User("Kyle");
    const users3 = new User("Kenny");
    const users4 = new User("Stan");

    const task = new Task(false,user1,10);
    const task2 = new Task(true,users2,10);
    const task3 = new Task(true,users3,10);
    const task4 = new Task(true,users4,10);

    const project = new Project([task,task2,task3,task4]);
    const app = new App("New app",[project]);

    // console.log("user - "+JSON.stringify(user1));
    // console.log("*************************************************************************************")
    // console.log("user - "+JSON.stringify(users2));
    // console.log("*************************************************************************************")

    // console.log("task info - "+(task.getInfo()))
    // console.log("*************************************************************************************")
    // console.log("task info - " + task2.getInfo())
    // console.log("*************************************************************************************")
    // console.log(JSON.stringify(project))
    // console.log("*************************************************************************************")
    project.deleteTask(user1.id);
    // console.log(JSON.stringify(project))
    // console.log("*************************************************************************************")
    const users5 = new User("Batters");
    const task5 = new Task(false,users5,10);
    project.addTask(task5);
    // console.log(JSON.stringify(project));
    // console.log("*************************************************************************************")
    task5.completed = true;
    project.editTask(task5);
    // console.log(JSON.stringify(project));z
    // console.log("*************************************************************************************")
    // console.log("All task by developer - " + JSON.stringify(project.getAllTaskByDeveloper(task4.id)));
    // console.log("*************************************************************************************")
    // console.log("Total time - "+JSON.stringify(project.getTotalTime()));
    // console.log("*************************************************************************************")
    app.setName("Cool app");
    // console.log("App - "+JSON.stringify(app))

    return (
        <div style={{color:'white'}}>
            <div>
                Users :
                <div>
                    <div>{JSON.stringify(user1)}</div>
                    <div>{JSON.stringify(users2)}</div>
                    <div>{JSON.stringify(users3)}</div>
                    <div>{JSON.stringify(users4)}</div>
                    <div>{JSON.stringify(users5)}</div>
                </div>
            </div>
            <div>
                Tasks :
                <div>
                    <div>{JSON.stringify(task)}</div>
                    <div>{JSON.stringify(task2)}</div>
                    <div>{JSON.stringify(task3)}</div>
                    <div>{JSON.stringify(task4)}</div>
                    <div>{JSON.stringify(task5)}</div>
                </div>
            </div>
            <div>
                Projects :
                <div>
                    <div>{JSON.stringify(project)}</div>
                </div>
            </div>
            <div>
                App :
                <div>
                    <div>{JSON.stringify(app)}</div>
                </div>
            </div>
            <div>
                All tasks by developer
                <div>
                    {JSON.stringify(project.getAllTaskByDeveloper(users2.id))}
                </div>
            </div>
        </div>
    );
};

export default Task1;