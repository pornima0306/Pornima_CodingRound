import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,
    private authService : AuthServiceService)/* router service helps to navigatie from one component to another component 
  >> this is called as the programetical routing >> means the routing done in the TS file  */ 
  { 
    
  }

  ngOnInit(): void {
  }
  goToproducts(){
    //Api Call
    this.router.navigate(['/products']) // by default navigate method takes absolute path
  }
 /*  logInToApp(){
    this.authService.LogIn()
  }
  logOutFromApp(){
    this.authService.LogOut()
  } */
}
