import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';

/**
 * Module holding all the application's routing information and configuration.
 *
 * @author davinen.s.curoopen
 */
const routes: Routes = [
  {path:  'products', component: ProductListComponent},
  {path:  'products/:id', component: ProductDetailComponent},
  {path:  'welcome', component: WelcomeComponent},
  {path:  '', redirectTo: 'welcome', pathMatch: 'full'},
  {path:  '**', redirectTo: 'welcome', pathMatch: 'full'}, // normally should redirect to 404 component..
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
