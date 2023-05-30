import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth/registro', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./components/auth/auth/auth.module').then(m => m.AuthModule)},
  { path: 'auth/error' , redirectTo: 'auth/not-found'},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
