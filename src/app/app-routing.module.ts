import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RadioComponent } from './radio/radio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginAuthGuard } from './login-auth.guard';

const routes: Routes = [
  {
    path: 'template-driven-form',
    canActivate: [LoginAuthGuard],
    component: TemplateDrivenFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'radio',
    canActivate: [LoginAuthGuard],
    component: RadioComponent,
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
