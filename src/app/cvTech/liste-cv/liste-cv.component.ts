import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../model/Person';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() persons: Person[];
  @Output() selectedPerson = new EventEmitter();

  constructor(){ }

  ngOnInit(): void{
  }

  sendSelectPerson(selectedPerson): void{
    this.selectedPerson.emit(selectedPerson);
  }

}
