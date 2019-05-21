import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DeleteProductDialogComponent } from '../admin/edit-products/delete-product-dialog/delete-product-dialog.component';
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
  showAdminButtons = false;

  constructor(
    public editProductDialog: MatDialog,
    public deleteProductDialog: MatDialog
  ) {}

  ngOnInit() {}

  onMouseOverProductCard(): void {
    if (this.viewAsAdmin) {
      this.showAdminButtons = true;
    }
  }

  onMouseOutProductCard(): void {
    if (this.viewAsAdmin) {
      this.showAdminButtons = false;
    }
  }

  openEditProductDialog(): void {
    if (!this.viewAsAdmin) {
      return;
    }

    this.editProductDialog.open(EditProductDialogComponent, {
      data: {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price
      }
    });
  }

  openDeleteProductDialog(): void {
    if (!this.viewAsAdmin) {
      return;
    }

    this.deleteProductDialog.open(DeleteProductDialogComponent, {
      data: {
        id: this.product.id,
        name: this.product.name
      }
    });
  }

  deleteProduct(): void {
    if (!this.viewAsAdmin) {
      return;
    }
    this.openDeleteProductDialog();
  }

  addProductToCart() {
    if (this.viewAsAdmin) {
      return;
    }
    console.log('add item to cart:', this.product.name);
  }
}
