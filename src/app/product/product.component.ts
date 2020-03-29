import { Component, OnInit } from '@angular/core';
// import { Productts } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // product: Productts = {
  //   name: 'IPhone XS Max',
  //   price: 10000,
  //   desc: 'New Iphone from Apple',
  //   img: 'https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x460.png',
  //   status: true
  // }

  // changeStatus(){
  //   this.product.status = false;
  // }

}