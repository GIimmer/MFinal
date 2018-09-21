import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any = {};
  eQuantity: string = "There cannot be any remaining examples of this product prior to deletion";
  eShow: boolean = false;
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
    })
  }
  delete(){
    if(this.product.qty != 0){
      this.eShow = true;
    } else {
      let observable = this._httpService.deleteProduct(this.product._id);
      observable.subscribe(data=>{
        console.log("The returned data is: ", data);
        this._router.navigate(['/products']);
      })
    }
  }
}
