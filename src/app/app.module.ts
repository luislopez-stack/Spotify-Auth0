import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'

//SERVICIOS
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';


import { AppRoutingModule, ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PagosComponent } from './components/transaccion/pagos/pagos.component';
import { PagoComponent } from './components/transaccion/pago/pago.component';

//PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/shared/auth-nav/auth-nav.component';
import { CallbackAuthComponent } from './components/callback-auth/callback-auth.component'

//LOCALIZACION & IDIOMA
import { registerLocaleData } from '@angular/common';
import  localEs  from '@angular/common/locales/es';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { PipesdomseguroPipe } from './pipes/pipesdomseguro.pipe';
import { ContrasenapipePipe } from './pipes/contrasenapipe.pipe';


registerLocaleData( localEs);

//IMPORTAR RUTAS


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent,
    UsuarioComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    CallbackAuthComponent,
    CapitalizadoPipe,
    PipesdomseguroPipe,
    ContrasenapipePipe,
    PagosComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, /*{useHash: true}*/)
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
