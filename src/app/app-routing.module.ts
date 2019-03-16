import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageAppComponent } from './mainpage/mainpage-app.component';

export const ROUTES: Routes = [
  { path: '', component: MainpageAppComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
