import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  errorMsg!:string;
  constructor(private router : Router,
    private route :ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);  /* we got msg from the router module */
    
    this.errorMsg = this.route.snapshot.data['msg']
  }
  goToHome(){
    this.router.navigate(['/'])
  }
}
