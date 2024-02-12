import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../Services/product/product.service';
import { Product } from '../../Models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import type { AvlDialogComponent } from '@avl-ng-controls/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  newProduct: Product;
  id!: string|null;
  editedProduct: Product;
  products: Product[]=[];
  prd!: Product;

  openView= false;
  openEdit= false;
  openDelete=false;
  openAdd= false;
  dirty: boolean;

  @ViewChild('optionForm', { read: NgForm }) optionForm: any;
  @ViewChild('dialog') dialog: AvlDialogComponent;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){
    this.newProduct = {
      id: '',
      name: '',
      description: '',
      amount: 0,
      isAvailable: true,
      quantity: 0
    };
    this.editedProduct={
      id: '',
      name: '',
      description: '',
      amount: 0,
      isAvailable: false,
      quantity: 0,
    };
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.productService.getAll().subscribe((response: any)=>{

      if (response.isSuccess) {

        this.products = response.data;

        console.log(this.products);
      }
    });
  }

  openViewDialog() {
    this.openView = true;
  }

  openEditDialog() {
    this.openEdit = true;
  }

  openDeleteDialog() {
    this.openDelete = true;
  }

  openAddDialog() {
    this.openAdd = true;
  }

  openChange(value: boolean) {
    if (this.optionForm) {
      this.optionForm.resetForm();
    }
    if (this.dirty === true) {
      this.dirty = false;
    }
  }

  add(){
    console.log(this.newProduct);
    this.productService.postProducts(this.newProduct).subscribe((res: any)=>{
      console.log('Product Created Successfully',this.newProduct);

    });
    window.location.reload();
  }

  updateSubmit(){
    this.productService.updateProduct(this.editedProduct).subscribe((res: any)=>{
      console.log('Product updated successfully:', this.editedProduct);
    },
    (error) => {
      console.error('Error updating product:', error);
    });
  }

  confirmDelete(): void {
    this.productService.deleteProduct(this.id).subscribe((response: any) => {
      console.log(response.message);
    });

    window.location.reload();
  }

  view(product: Product){
    this.id =product.id;

    this.productService.getProductById(this.id).subscribe((response: any) => {
      this.prd = response.data;
    },
    (error) => {
      console.error('Error fetching product details:', error);
    }
    );
  }

  edit(product: Product){
    this.editedProduct=product;
  }

  del(product: Product){
    this.id=product.id;
  }


}
