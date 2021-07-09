import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//voici tout mes composant que jappelle pour mon fichier
//certain sont mis en commentaire car non-necessaire dans mon appli actuellement
import { AppComponent } from './app.component';
//import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './page/home/home.component';
//import { ConnectionComponent } from './page/child/connection/connection.component';
//import { DeconnectionComponent } from './page/child/deconnection/deconnection.component';
//import { ItemDetailComponent } from './item-detail/item-detail/item-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './page/product-alert/product-alert.component'
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductDirective } from './product-directive/product.directive'

@NgModule({
  declarations: [
    AppComponent,
   // ToolbarComponent,
    FooterComponent,
    HomeComponent,
    //ConnectionComponent,
    //DeconnectionComponent,
    //ItemDetailComponent,
    TopBarComponent,
    ProductAlertComponent,
    ProductDirective,
    ProductListComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
