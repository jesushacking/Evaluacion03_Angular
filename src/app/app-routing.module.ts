import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IndexComponent } from './index/index.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { ModelosComponent } from './modelos/modelos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { YamaludeComponent } from './yamalude/yamalude.component';

const routes: Routes = [
  {path: '' , component:MenuprincipalComponent},
  {path: 'index' , component:IndexComponent},
  {path: 'nosotros' , component:NosotrosComponent},
  {path: 'modelos' , component:ModelosComponent},
  {path: 'promociones' , component:PromocionesComponent},
  {path: 'yamalude' , component:YamaludeComponent},
  {path: 'galeria' , component:GaleriaComponent},
  {path: 'ubicacion' , component:UbicacionComponent},
  {path: 'contactenos' , component:ContactenosComponent},
  {path: '**' , redirectTo:'/',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
