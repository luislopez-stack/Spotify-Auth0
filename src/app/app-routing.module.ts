import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CallbackAuthComponent } from './components/callback-auth/callback-auth.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//RUTAS MANUALES
export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'callbackAuth', component: CallbackAuthComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
