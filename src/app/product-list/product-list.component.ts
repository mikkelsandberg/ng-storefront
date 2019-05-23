import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() viewAsAdmin: boolean;
  @Input() showProductHeading = true;
  products: IProduct[];
  editProductsLink: SafeHtml;

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) {
    this.editProductsLink = sanitizer.bypassSecurityTrustHtml(
      `<a [routerLink]="['/admin/edit-products']">admin dashboard</a>`
    );
  }

  ngOnInit() {
    this.productService
      .getProductList()
      .subscribe(products => (this.products = products));
  }

  getBlankStateMessage() {
    if (!this.showProductHeading) {
      return 'above';
    }
    return 'on the admin dashboard';
    // return `on the ${this.editProductsLink}`;
  }
}
