import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { InscriptionComponent } from './page/inscription/inscription.component';


const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/inscription', component: InscriptionComponent },
// { path: '**', component: Pagenot404Component },  // Wildcard route for a 404 page];
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
