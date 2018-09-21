import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any = {};
  currId: number;
  name: string;
  qty: string;
  price: string;
  _id: string;
  resPro: any = {
    name: "",
    qty: null,
    price: null
  };
  constructor(
    private _httpService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}
  ngOnInit() {
    this.getMaxId();
  }
  getMaxId(){
    let observable = this._httpService.numProducts();
    observable.subscribe(data=>{
      console.log("Here is the returned product count: ", data);
      this.newProduct._id = data;
      console.log("Here is the newest ID: ", data);
    })
  }
  reset(){
    this.newProduct.name = this.resPro.name;
    this.newProduct.qty = this.resPro.qty;
    this.newProduct.price = this.resPro.price;
  }

  createProduct(){
    let observable = this._httpService.newProduct(this.newProduct);
    observable.subscribe(data=>{
      if((data['errors'])){
        this.name = this.qty = this.price = this._id = "";
        for(let key in data['errors']){
          this[key] = data['errors'][key]['message'];
          console.log("this.key is: ", this[key]);
        }
      } else {
        this._router.navigate(['/products']);
      }
    })
  }
}
