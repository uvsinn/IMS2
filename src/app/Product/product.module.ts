import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    HttpClientModule, 
    RouterModule,
    ProductRoutingModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
