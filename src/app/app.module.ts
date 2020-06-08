import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FunctionhallComponent } from './functionhall/functionhall.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchbarService } from './searchbar/searchbar.service';
import { FunctionhallpageComponent } from './functionhall/functionhallpage/functionhallpage.component';
import { RegisterComponent } from './register/register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FunctionhallComponent,
    SearchbarComponent,
    HelpComponent,
    LoginComponent,
    FunctionhallpageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [SearchbarService],
=======

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
>>>>>>> eb85083c80ef45243776770ef1d992f3c167401d
  bootstrap: [AppComponent]
})
export class AppModule { }
