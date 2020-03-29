import { Injectable } from "@angular/core";
import { data } from "../mock-data";
import { Productts } from "../Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  products = data;
  product: Productts;
  product2: Productts;
  api = 'https://5e7afb830e04630016332807.mockapi.io/product';
  constructor(
    private http: HttpClient) { }

  getProducts(): Observable<Productts[]> {
    // Lay danh sach san pham
    // return this.products;
    return this.http.get<Productts[]>(`${this.api}`);
  }

  getProduct(id): Observable<Productts> {
    // console.log(id);
    // Chi tiet san pham
    // return (this.product = this.products.find(
    //   product => (product.id = product.id))
    // return this.product = product;
    // return this.products.find(product => product.id == id);
    // console.log(this.http.get<Productts>(`${this.api}/Product/:id`));
    return this.http.get<Productts>(`${this.api}/${id}`);

  }
  removeProduct(id): Observable<Productts> {
    // Xoa san pham
    // return (this.products = this.products.filter(product => product.id != id));
    return this.http.delete<Productts>(`${this.api}/${id}`);
  }
  addProduct(product): Observable<Productts> {
    // them san pham
    // let newProduct = { id: 5, ...product };
    // return this.products.push(newProduct);
    return this.http.post<Productts>(`${this.api}`, product);
  }

  updateProduct(product): Observable<Productts> {
    return this.http.put<Productts>(`${this.api}/${product.id}`, product);
  }
  editProduct(product) {
    // sua san pham
    var index = this.products.indexOf(product);
    let newProduct = product;
    if (index !== -1) {
      return (this.products[index] = newProduct);
    }
  }
}
