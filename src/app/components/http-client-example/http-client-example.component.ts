import { Component, OnInit, inject } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css',
})
export class HttpClientExampleComponent implements OnInit {
  jokeService = inject(JokesService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    this.refreshDadJoke();
    // this.jokeService.getDadJoke().subscribe((data) => {
    //   this.dadJoke = data.joke;
    // });
    
      this.refreshChuckNorrisJoke();
    // this.jokeService.getJackNorrisJoke().subscribe((data) => {
    //   this.chuckNorrisJoke = data.value;
    // });
  }

  refreshDadJoke() {
    this.jokeService.getDadJoke().subscribe((data) => {
      this.dadJoke = data.joke;
    });
  }
  
  refreshChuckNorrisJoke() {
    this.jokeService.getJackNorrisJoke().subscribe((data) => {
      this.chuckNorrisJoke = data.value;
    });
  }
}
