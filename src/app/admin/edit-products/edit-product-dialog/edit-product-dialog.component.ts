import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IProduct } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {
  constructor(
    private productService: ProductService,
    public editProductDialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct
  ) {}

  ngOnInit() {}

  editProduct(editProductForm: NgForm) {
    if (editProductForm.valid) {
      this.productService
        .editProduct(this.data.id, this.data)
        .subscribe(data => {
          console.log('new data:', data);
        });
    }
  }
}
