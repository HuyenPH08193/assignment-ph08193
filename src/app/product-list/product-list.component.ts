import { Component, OnInit } from "@angular/core";
import { data } from "../mock-data";
import { Productts } from "../Product";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  
  constructor(
    private productService: ProductService
    ) {}

  ngOnInit(): void {
    this.getProducts();
    
  }

  products: Productts[];

  getProducts(){
    // console.log(this.productService.getProducts().subscribe(response => this.products = response));
return this.productService.getProducts().subscribe(response => this.products = response);
// return this.products = this.productService.getProducts();
  }

  selector: Productts;
  showDetails(id) {
    // console.log(id);
    // this.selector = product;
    this.selector = this.productService.getProduct(id);
    // console.log(this.selector);
  }

  removeProduct(id) {
    this.products = this.productService.removeProduct(id);
  }

  editProduct(product){
    this.products = this.productService.editProduct(product);
  }
}
