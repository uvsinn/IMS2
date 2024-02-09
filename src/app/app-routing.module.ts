import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Product/Components/product/product.component';

const routes: Routes = [
  {
    path:'', 
    component: ProductComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('./Product/product.module').then(m => m.ProductModule)
      }
    ]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
