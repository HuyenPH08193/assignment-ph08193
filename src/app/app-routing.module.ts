import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ServiceProductComponent } from './service-product/service-product.component';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: ProductAddComponent},
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'product/:id',component: ProductDetailsComponent },
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'product-manager', component:ProductManagerComponent},
  { path: 'product-service',component: ServiceProductComponent},
  { path: '**',component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
