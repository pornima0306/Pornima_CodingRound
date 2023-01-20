import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public prodObj : IProduct | undefined ;
  public prodId : number =1;
  public canEdit : number= 1;
    constructor(private productService : ProductService,
      private route : ActivatedRoute) { }
  
    ngOnInit(): void {
      this.prodObj = this.productService.getSingleProduct(this.prodId);
      this.route.params
                .subscribe((params : Params)=>{
                  this.prodId = +params['id'];
                  this.prodObj = this.productService.getSingleProduct(this.prodId);
                })
      this.route.queryParams
                .subscribe((params : Params)=>{
                  console.log(params);  /* here we get an object canEdit:0 or candEdit:1 */
                  this.canEdit = +params['canEdit']
                })          
    }
  
    updateProduct(pname:string, pstatus:string){
      let obj : IProduct ={
        pName : pname,
        pId : this.prodId,
        pStatus : pstatus,
        editProduct : this.canEdit,
      }
    }
}
