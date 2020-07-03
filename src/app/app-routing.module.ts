import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { AutenticaComponent } from './autentica/autentica.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'slide', component: SlideComponent
  },
  {
    path: 'autentica', component: AutenticaComponent
  },
  {
    path: '',
    redirectTo: 'autentica',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
