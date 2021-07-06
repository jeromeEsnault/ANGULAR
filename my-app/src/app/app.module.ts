import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ConnectionComponent } from './page/child/connection/connection.component';
import { DeconnectionComponent } from './page/child/deconnection/deconnection.component';
import { ItemDetailComponent } from './item-detail/item-detail/item-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent, 
    HomeComponent, ConnectionComponent, DeconnectionComponent, ItemDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
