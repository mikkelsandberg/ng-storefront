import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditProductsComponent } from './admin/edit-products/edit-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'admin/edit-products', component: EditProductsComponent },
  { path: 'admin', pathMatch: 'full', redirectTo: 'admin/edit-products' },
  { path: 'cart', component: CartComponent },
  { path: '', pathMatch: 'full', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
