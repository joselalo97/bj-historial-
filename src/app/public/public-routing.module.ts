import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { 
    path: '', component: PublicComponent,
    children: [
      {
        path: '', loadChildren: () => import('./pub-historial/pub-historial.module').then(m => m.PubHistorialModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
