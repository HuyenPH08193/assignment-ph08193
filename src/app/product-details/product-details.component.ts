import { Component, OnInit, Input } from "@angular/core";
import { Productts } from "../Product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../service/product.service";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Productts;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  // @Input ('data') product : Productts;
  ngOnInit() {
    this.getDetails();
    // console.log(this.product);
  }

  getDetails() {
    return this.route.params.subscribe(param => {
      this.productService
        .getProduct(param.id)
        .subscribe(data => (this.product = data));
    });
    // console.log('1'+this.route.params.subscribe(param => this.product = this.productService.getProduct(param.id)));
    // console.log('2'+this.product.id);
    // console.log('3'+typeof(this.route.params.subscribe(param => this.product = this.productService.getProduct(param.id))));
    // this.product = this.route.params.subscribe(param => this.product = this.productService.getProduct(param.id));
    // console.log('Paosd'+this.product);
    // console.log(this.product = this.productService.getProduct(4);
    // this.route.params.subscribe(param => {
    //   this.product = this.productService.getProduct(param.id);
    // });
  }
}
