import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EditProductDialogComponent } from '../admin/edit-products/edit-product-dialog/edit-product-dialog.component';
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

  constructor(public editProductDialog: MatDialog) {}

  ngOnInit() {}

  onMouseOverProductCard(): void {
    if (this.viewAsAdmin) {
      this.showEditButton = true;
    }
  }

  onMouseOutProductCard(): void {
    if (this.viewAsAdmin) {
      this.showEditButton = false;
    }
  }

  openEditProductDialog(): void {
    console.log('clicked');
    const editProductDialogRef = this.editProductDialog.open(
      EditProductDialogComponent,
      {
        data: {
          id: this.product.id,
          name: this.product.name,
          description: this.product.description,
          price: this.product.price
        }
      }
    );

    editProductDialogRef.afterClosed().subscribe(result => {
      console.log('edit product dialog closed:', result);
    });
  }

  addProductToCart() {
    if (!this.viewAsAdmin) {
      console.log('add item to cart:', this.product.name);
    }
  }
}
