import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  newProduct: IProduct = {
    name: null,
    description: null,
    price: null
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  onSubmitNewProduct(newProductForm: NgForm) {
    if (newProductForm.valid) {
      this.productService
        .postNewProduct(this.newProduct)
        .subscribe(data => console.log('new data added:', data));
    }
  }
}
