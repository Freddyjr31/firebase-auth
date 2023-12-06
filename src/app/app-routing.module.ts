import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { HomePanelComponent } from './HomePanel/home-panel/home-panel.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomePanelComponent,
    //...canActivate(() => redirectUnauthorizedTo(['/login'])),
    data:{
      title:'Home'
    }
  },
  {
    path:'login',
    component:LoginComponent,
    data:{
      title:'login'
    }
  },
  {
    path:'singUp',
    component:RegisterComponent,
    data:{
      title:'Sing Up'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
