import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {JsonPipe, NgClass, NgStyle} from "@angular/common";
import {User, UserService} from "../user.service";


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    NgStyle,
    NgClass
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    address: new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    }),
    skills: new FormArray([
      new FormGroup({
        skill: new FormControl()
      })
    ]),
    workexperience: new FormArray([
      new FormGroup({
        workplace: new  FormControl(),
        position: new  FormControl(),
        workyear: new  FormControl(),
      })
    ]),
  })


  get workexperience(){
    return this.form.get('workexperience') as FormArray
  }

  addworkexperience() {
    const NewWorkControl = new FormGroup({
      workplace: new  FormControl(),
      position: new  FormControl(),
      workyear: new  FormControl(),
    })
    this.workexperience.push(NewWorkControl)
  }

  removeworkexperience(j: number) {
    this.workexperience.removeAt(j)
  }

  get skills() {
    return this.form.get('skills') as FormArray
  }

  addskill() {
    const newControl = new FormGroup({
      skill: new FormControl()
    })
    this.skills.push(newControl)
  }

  removeSkill(i: number) {
    this.skills.removeAt(i)
  }


  userService = inject(UserService)

  submit() {
    if (this.form.valid) {
      this.userService.addUser(this.form.value as User)
    }
  }

}
