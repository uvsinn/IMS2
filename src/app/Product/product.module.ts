import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { AvlDialogModule } from '@avl-ng-controls/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    RouterModule,
    ProductRoutingModule,
    CommonModule,
    FormsModule,
    AvlDialogModule
  ],
  exports: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
