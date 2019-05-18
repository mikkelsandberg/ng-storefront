import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost';
  private port = '3000';
  private paths = {
    products: 'products'
  };

  constructor(private http: HttpClient) {}

  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `${this.baseUrl}:${this.port}/${this.paths.products}`
    );
  }

  postNewProduct(newProduct: IProduct): Observable<IProduct> {
    console.log('new product:', newProduct);
    return this.http.post<IProduct>(
      `${this.baseUrl}:${this.port}/${this.paths.products}`,
      newProduct
    );
  }
}
