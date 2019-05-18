import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  private currentProductList: IProduct[];
  newProductForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductList()
      .subscribe(res => (this.currentProductList = res));
  }

  onSubmitNewProduct() {
    const updatedNewProduct = {
      ...this.newProductForm.value,
      id: this.currentProductList.length + 1
    };

    this.productService.postNewProduct(updatedNewProduct);
  }
}
