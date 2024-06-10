// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ShopComponent } from './shop/shop.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { BuyComponent } from './buy/buy.component';
import { FormComponent } from './form/form.component';
import { SignComponent } from './sign/sign.component';
import { SuccessComponent } from './success/success.component';
import { CartsComponent } from './carts/carts.component';

// app-routing.module.ts
// app-routing.module.ts
// app-routing.module.ts
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'exhibition', component: ExhibitionComponent },
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'buy', component: BuyComponent },
  {path: 'carts', component: CartsComponent},
  {path: 'form', component: FormComponent},
  {path:'success', component: SuccessComponent},
  {path: 'sign',component: SignComponent}
 
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
