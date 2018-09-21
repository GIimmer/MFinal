import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  constructor(
    private _httpService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}
  ngOnInit() {
  }

}
