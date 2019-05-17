import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductList()
      .subscribe(products => (this.products = products));
  }
}
