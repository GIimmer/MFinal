import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allProducts = [];
  constructor(
    private _httpService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}
  ngOnInit() {
    this.getProductsFromService();
  }
  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data=>{
      const dataKeys = Object.keys(data);
      for(let datum in dataKeys){
        this.allProducts.push(data[datum]);
      }
    })
  }
}
