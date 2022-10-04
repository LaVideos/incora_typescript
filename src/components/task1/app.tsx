import {IApp, IProject, ITask, IUser} from "./interfaces";

class Task implements ITask{
    completed: boolean;
    developer: User;
    durationInMin: number;
    id: number;

    constructor(completed: boolean, developer: User, durationInMin: number) {
        this.completed = completed;
        this.developer = developer;
        this.durationInMin = durationInMin;
        this.id = this.developer.id;
    }

    getInfo(): string {
        return ` \n 
        completed - ${this.completed}\n
        developer - ${this.developer.name}\n
        duration - ${this.durationInMin}\n
        id - ${this.id} 
        `;
    }
}

class App implements IApp{
    name: string;
    projects: Project[];

    addProject(project: Project): void {
        this.projects.push(project)
    }

    setName(name: string): void {
        this.name = name;
    }

    constructor(name:string,projects:Project[]) {
        this.name = name;
        this.projects = projects;

    }
}

class Project implements IProject{
    constructor(tasks: Task[]) {
        this.tasks = tasks;
    }
    tasks: Task[];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    deleteTask(id: number): void {
        this.tasks.splice((id-1),1);
    }

    editTask(task: Partial<Task>): void {
        const task2Update = this.tasks.map(value => value.id === task.id);
        if(task2Update){
            Object.assign(task2Update,task);
        }else {
            throw new Error("Wrong task")
        }
    }

    getAllTaskByDeveloper(id: number): Task[] {
        return this.tasks.filter(value => value.id === id);
    }

    getTotalTime(): number {
        let totalTime:number = 0;
        this.tasks.map(value => totalTime+= value.durationInMin)
        return totalTime;
    }

}

class User implements IUser{

    static count = 0;
    id: number;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.id = ++User.count;
    }




}

export {
    User,
    Project,
    Task,
    App
}