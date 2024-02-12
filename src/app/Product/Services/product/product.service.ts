import { Injectable } from '@angular/core';
import { environment } from '../../Constants/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL: string=environment.apiBaseUrl;

  // httpOptions={
  //   headers: new HttpHeaders({
  //     'content-Type':'application/json'
  //   })
  // }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/GetAllProducts');
  }

  postProducts(product: Product): Observable<any>{
    return this.httpClient.post(this.apiURL+'/InsertProduct',product);
  }

  getProductById(id: string|null): Observable<any>{
    return this.httpClient.get(this.apiURL+'/GetProductById'+'?ID='+id);
  }

  updateProduct(product: Product): Observable<any>{
    return this.httpClient.put(this.apiURL+'/UpdateProductById', product);
  }

  deleteProduct(id: string|null): Observable<any>{
    return this.httpClient.delete(this.apiURL+'/DeleteProductById'+'?ID='+id);
  }
}
