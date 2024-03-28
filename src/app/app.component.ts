import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Grigoris Latsis';

  person ={
    givenName: 'Grigoris',
    surName: "Latsis",
    age: 31,
    email:"glatsis@aueb.gr"
  }
}
