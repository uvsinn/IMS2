import { Component } from '@angular/core';
import { ProductService } from '../../Services/product/product.service';
import { Product } from '../../Models/product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  newProduct: Product;
  id!:string|null;
  editedProduct:Product;
  products:Product[]=[];
  prd!:Product;

  constructor(private productService:ProductService, private router: Router, private route:ActivatedRoute){
    this.newProduct = {
      id:"",
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
    }
  }

  addProduct(){
    console.log("Added")
  }

    CreateSubmit(){
      console.log(this.newProduct);
      this.productService.PostProducts(this.newProduct).subscribe((res:any)=>{
        
        console.log("Product Created Successfully",this.newProduct);
        alert("Product Created Successfully!");
        this.router.navigateByUrl('product/index');
      })
    }

    UpdateSubmit(){
      this.productService.UpdateProduct(this.editedProduct).subscribe((res:any)=>{
    
        console.log('Product updated successfully:', this.editedProduct);
        alert("Data Updated Successfully");
        this.router.navigateByUrl('product/index');
      },
      (error) => {
        console.error('Error updating product:', error);
      });
    } 
    
    ConfirmDelete(id:string): void {
      
      const isConfirmed = window.confirm('Are you sure you want to delete this product?');
  
      if (isConfirmed) {
        // Call method to delete product
        this.productService.DeleteProduct(id).subscribe((response:any) => {
          console.log(response.message);
        }
      );
      }
    }

    view(){

      this.id =this.route.snapshot.params['id'];

      this.productService.getProductById(this.id).subscribe((response: any) => {
        this.prd = response.data;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
    }
    


}
