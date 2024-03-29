import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Grigoris Latsis';

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

  person2 : Person = {
    givenName: 'Mike',
    surName: 'Tyson',
    age: 70,
    email:'tyson@aueb.gr',
    address:'Bronx, USA'
  };
}
