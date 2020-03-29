import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './service/product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { AboutComponent } from './about/about.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ServiceProductComponent } from './service-product/service-product.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, SlideComponent, ProductListComponent, ProductComponent, ProductDetailsComponent, ProductAddComponent, AboutComponent, PageNotFound404Component, HomeComponent, ProductEditComponent, ProductManagerComponent, ServiceProductComponent, AccountComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
