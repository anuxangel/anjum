// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { BuyComponent } from './buy/buy.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { SignComponent } from './sign/sign.component';
import { SuccessComponent } from './success/success.component';
import { CartsComponent } from './carts/carts.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    BuyComponent,
    ExhibitionComponent,
    FormComponent,
    SignComponent,
    SuccessComponent,
    CartsComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
