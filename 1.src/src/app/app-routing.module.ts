import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppGuard} from "./services/app.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    // canActivate: [AppAuthGuard],
    pathMatch: "full",
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate : [AppGuard]
  },
  { path: "**", redirectTo: "404" },
  { path: "404", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
