import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/api/products');
  }
  newProduct(newProduct){
    return this._http.post('/api/products', newProduct);
  }
  editProduct(editedProduct){
    return this._http.put('/api/products/' + editedProduct._id, editedProduct);
  }
  getProduct(productId){
    return this._http.get('/api/products/' + productId);
  }
  deleteProduct(productId){
    return this._http.delete('/api/products/' + productId);
  }
  numProducts(){
    return this._http.get('/api/productId');
  }

}
