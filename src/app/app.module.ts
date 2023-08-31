import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './dialoges/log-in/log-in.component';
import { SignUpComponent } from './dialoges/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './dialoges/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';

const BASE_URL: string = 'http://localhost:3000';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [{ provide: 'BASE_URL', useValue: BASE_URL }],
  bootstrap: [AppComponent],
})
export class AppModule {}
