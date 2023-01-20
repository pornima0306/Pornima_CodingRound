import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/data';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public usersData! : IUser[]
public selectedUser : number = 1;
  constructor(private userServices : UsersService) { }

  ngOnInit(): void {
    this.usersData = this.userServices.getAllUsers();
  }

}
