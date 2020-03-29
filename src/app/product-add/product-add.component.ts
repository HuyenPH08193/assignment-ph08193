import { Component, OnInit } from "@angular/core";
import { Productts } from "../Product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
})
export class ProductAddComponent implements OnInit {
  product: Productts = new Productts();
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}
  addProduct() {
    this.productService
      .addProduct(this.product)
      .subscribe(data => this.router.navigateByUrl("/product-manager"));
  }
}
