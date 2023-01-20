import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/shared/model/data';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
/* public usersObj : IUser | undefined ; */
public usersObj! : IUser;
public userId : number = 1;
  constructor(private userServices : UsersService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
   /*  this.usersObj = this.userServices.getSingleUser(this.userId) */
   this.usersObj = this.userServices.getSingleUser(this.userId)!
   /* console.log(this.usersObj); */

   this.route.params
              .subscribe((param : Params)=>{
                this.userId = +param['id'];
                this.usersObj = this.userServices.getSingleUser(this.userId)!
              })

  }

}
