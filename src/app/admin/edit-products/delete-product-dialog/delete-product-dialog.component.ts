import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IProduct } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.scss']
})
export class DeleteProductDialogComponent implements OnInit {
  constructor(
    private productService: ProductService,
    public deleteProductDialogRef: MatDialogRef<DeleteProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct
  ) {}

  ngOnInit() {}

  deleteProduct() {
    this.productService.deleteProduct(this.data.id).subscribe(data => {
      console.log('product deleted:', data);
    });
  }
}
