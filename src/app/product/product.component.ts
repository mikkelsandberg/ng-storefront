import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Input() viewAsAdmin: boolean;
  showEditButton = false;

  constructor() {}

  ngOnInit() {}

  onMouseOverProductCard() {
    if (this.viewAsAdmin) {
      this.showEditButton = true;
    }
  }

  onMouseOutProductCard() {
    if (this.viewAsAdmin) {
      this.showEditButton = false;
    }
  }
}
