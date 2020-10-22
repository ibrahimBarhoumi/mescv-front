import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/Person';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

    persons: Person [];
    selectedPerson: Person;

    constructor(){ }

    ngOnInit(): void{
        this.persons = [new Person(1, 'BARHOUMI', 'Brahim', 'ibrahim.png', 32, 45664, 'java developer'),
                        new Person(2, 'BARHOUMI', 'zakaria', 'zizou.png', 2, 45665, 'java developer'),
                        new Person(3, 'BARHOUMI', 'Adam', 'adam.png', 1, 45667, 'java developer')];
    }

    sendSelectPerson(person): void{
        this.selectedPerson = person;
    }

}
