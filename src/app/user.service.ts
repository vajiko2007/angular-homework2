import { Injectable } from '@angular/core';


export interface User {
  name: string;
  lastname: string;
  birthdate: string;
  phonenumber: string;
  address: {
    address: string;
    city: string;
  };
  skills: { skill: string }[];
  workexperience: {
    workplace: string
    position: string
    workyear: string
  }[];

}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[]

  addUser(user:User){
    this.users.push(user)
  }

}
