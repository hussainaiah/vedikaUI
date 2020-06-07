import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { FunctionhallComponent } from './functionhall/functionhall.component';
import { FunctionhallpageComponent } from './functionhall/functionhallpage/functionhallpage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'/header',pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
    
  { path:'help', component:HelpComponent},
  { path:'header',component:HeaderComponent},
  {path: 'searchbar', component: SearchbarComponent},
  {path: 'functionhall', component: FunctionhallComponent},
  {path:'functionhallpage/:id',component:FunctionhallpageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }