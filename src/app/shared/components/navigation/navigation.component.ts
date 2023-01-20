import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService : AuthServiceService,
    private router : Router) { }

  ngOnInit(): void {
  }
  logoutFromApp(){
    this.authService.LogOut();
    this.router.navigate(['/']);
  }
}
