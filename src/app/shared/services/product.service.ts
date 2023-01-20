import { Injectable } from '@angular/core';
import { IProduct } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productArray : IProduct[] = [
    {
      pName : 'Laptop',
      
      pStatus : 'In Progress',
      pId : 1,
      editProduct: 1
    },
    {
      pName : 'iphone',
      
      pStatus : 'Dispached',
      pId : 2,
      editProduct: 1
    },
    {
      pName : 'Samsung',
      
      pStatus : 'Delivered',
      pId : 3,
      editProduct: 0
    },
    {
      pName : 'Dell Laptop',
      
      pStatus : 'Delivered',
      pId : 4,
      editProduct: 0
    }
  ]
  constructor() { }

  getAllProducts() : IProduct[]{
    return this.productArray
  }

  getSingleProduct(id: number){
    return this.productArray.find(prod => prod.pId === id)
  }

  updateProducts(obj : IProduct){
    console.log(obj);
    
  }
}
