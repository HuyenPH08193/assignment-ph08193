import { Component, OnInit } from "@angular/core";
import { data } from "../mock-data";
import { Productts } from "../Product";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  products: Productts[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    return this.productService
      .getProducts()
      .subscribe(response => (this.products = response));
  }

  removeProduct(id) {
    this.productService.removeProduct(id).subscribe(response => {
      this.products = this.products.filter(
        product => product.id != response.id
      );
    });
  }
}
