import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { IndexComponent } from './index/index.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { YamaludeComponent } from './yamalude/yamalude.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactenosComponent } from './contactenos/contactenos.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    IndexComponent,
    NosotrosComponent,
    ModelosComponent,
    PromocionesComponent,
    YamaludeComponent,
    GaleriaComponent,
    UbicacionComponent,
    ContactenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
