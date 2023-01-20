import { Injectable } from '@angular/core';
import { IUser } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public usersArray : IUser[] = [
    {
      userName : 'pooja',
      userId : 1
    },
    {
      userName : 'sandhya',
      userId : 2
    },
    {
      userName : 'Pornima',
      userId : 3
    },
    {
      userName : 'revti',
      userId : 4
    }
  ]
  constructor() { }

  getAllUsers():IUser[]{
    return this.usersArray
  }
  getSingleUser(id: number){
    return this.usersArray.find(user =>user.userId === id)
  }
}
