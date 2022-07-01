import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  { 
    path: 'products', children: [
      { path: '', component: ProductListComponent },
      { path: ':id/edit', component: EditProductComponent },
      { path: 'add', component: AddProductComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
