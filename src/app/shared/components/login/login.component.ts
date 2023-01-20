import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthServiceService,
    private router : Router) { }

  ngOnInit(): void {
  }
  logInToApp(){
    this.authService.LogIn();
    this.router.navigate(['/home'])  /* bidefault it takes absolute path */
  }
}
