import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
<<<<<<< HEAD
  imports: [MatIconModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 userService = inject(UserService);
 user = this.userService.user;

 logout() {
   this.userService.logoutUser();
 }

=======
  imports: [MatIconModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  userService = inject(UserService);
  user = this.userService.user;

  logout() {
    this.userService.logoutUser();
  }
>>>>>>> c2b30c5d568092c4f9b15d183f364047fcd54a5f
}
