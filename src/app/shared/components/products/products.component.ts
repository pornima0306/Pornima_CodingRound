import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/data';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public productArray! : IProduct[];
public selectedProduct : number =1;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productArray = this.productService.getAllProducts()
  }

}
