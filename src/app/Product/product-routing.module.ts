import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
  // {path:'', redirectTo:'/product', pathMatch: 'full'},
  {
    path:'', 
    component: ProductComponent, 

}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})


export class ProductRoutingModule { }
