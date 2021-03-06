import { ViewComponent } from './components/view/view.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { GoogleDriveFunctions } from 'src/app/services/google_drive_functions';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ViewComponent,
    NavComponent,
    SignInComponent,
    SignUpComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
