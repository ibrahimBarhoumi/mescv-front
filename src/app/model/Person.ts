export class Person {

    id: number;
    name: string;
    firstName: string;
    path: string;
    age: number;
    cin: number;
    job: string;


    constructor(id= 1 , name= '', firstName= '', path= '', age= 1, cin= 1, job= ''){
        this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.path = path;
        this.age = age;
        this.cin = cin;
        this.job = job;
    }
}

