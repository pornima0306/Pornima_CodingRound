import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../model/data';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IProduct> {

  constructor(private productService : ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
    let productId : number = route.params['id'];
    return this.productService.getSingleProduct(productId)!;
  }
  
  updateProduct(obj : IProduct){
    console.log(obj);
    
    
  }
}
