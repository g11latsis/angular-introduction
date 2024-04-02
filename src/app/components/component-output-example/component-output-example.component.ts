import { Component, Inject } from '@angular/core';
import { EPerson, ManyPerson, Person } from 'src/app/shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent,DialogModule],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  constructor(public dialog: Dialog) {}

  onPersonClicked(person:EPerson){
    // alert(this.personTemplate(person))
    this.dialog.open(PersonDialogComponent, {
      data: person,
    });
  }

  personTemplate(person: EPerson){
    return `
    Person Details:
    Firstname: ${person.givenName}
    Lastname: ${person.surName}
    Email: ${person.email}
    Age: ${person.age}
    Education: ${person.education}
    `
  }
}

@Component({
  imports:[PersonTableComponent],
  standalone:true,
  template: `
  <app-person-table [person] = "person"></app-person-table>
  <button class ="btn btn-primary btn-sm" (click)="dialogRef.close()">
    Close
  </button>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px;
      }
    `,
  ],
})

class PersonDialogComponent{
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public person: EPerson,
  ) {}
}