import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserService} from "../user.service";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-aplications-list',
  standalone: true,
  imports: [
    RouterLink,
    JsonPipe,
    NgForOf
  ],
  templateUrl: './aplications-list.component.html',
  styleUrl: './aplications-list.component.scss'
})
export class AplicationsListComponent {

  userService = inject(UserService)

  get users(){
    return this.userService.users
  }


}
