import { NgModule } from '@angular/core';


import { HomeComponent } from './page/home/home.component';
import { InscriptionComponent } from './page/inscription/inscription.component';

import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '**', component: PagenotfoundComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing: true} // <-- debugger le routage
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
