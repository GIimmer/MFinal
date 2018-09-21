import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product: any = {};
  resPro: any = {
    name: "",
    qty: 0,
    price: 0
  };
  currId: number;
  name: string;
  qty: string;
  price: string;
  constructor(
    private _httpService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.product._id = params['id'];
    });
    this.getOneProduct();
  }

  getOneProduct(){
    let observable = this._httpService.getProduct(this.product._id);
    observable.subscribe(data=>{
      console.log("The returned data is: ", data);
      this.product = data;
      this.resPro.name = data['name'];
      this.resPro.qty = data['qty'];
      this.resPro.price = data['price'];
    })
  }
  updateProduct(){
    let observable = this._httpService.editProduct(this.product);
    observable.subscribe(data=>{
      console.log("The data is coming back as such: ", data);
      if((data['errors'])){
        this.name = this.qty = this.price = "";
        for(let key in data['errors']){
          this[key] = data['errors'][key]['message'];
          console.log("this.key is: ", this[key]);
        }
      } else {
        this._router.navigate(['/products']);
      }
    })
  }
  reset(){
    this.product.name = this.resPro.name;
    this.product.qty = this.resPro.qty;
    this.product.price = this.resPro.price;
  }
}
