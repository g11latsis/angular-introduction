import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Grigoris',
    surName: 'Latsis',
    age: 31,
    email:'glatsis@aueb.gr',
    address:'Athens, Greece'
  };

  person1 : Person = {
    givenName: 'Matina',
    surName: 'Poulaki',
    age: 31,
    email:'tina@aueb.gr',
    address:'Leonidio, Greece'
  };

}
