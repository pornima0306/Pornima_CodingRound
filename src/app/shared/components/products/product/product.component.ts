import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { IProduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public prodObj! : IProduct | undefined;
public prodId : number =1;
  constructor(private productService : ProductService,
    private route : ActivatedRoute) {
      this.route.data
                .subscribe((data : Data)=>{
                  console.log(data);
                })
     }

  ngOnInit(): void {
    this.prodObj = this.productService.getSingleProduct(this.prodId);
    /* this.route.params
              .subscribe((params : Params) =>{
                this.prodId = +params['id'];
                this.prodObj = this.productService.getSingleProduct(this.prodId);
              }) */
  }

}
