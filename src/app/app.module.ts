import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { HomePanelComponent } from './HomePanel/home-panel/home-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AlertComponent } from './Alerts/alert/alert.component';
import { NotificationComponent } from './notificaction/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePanelComponent,
    AlertComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"auht-app","appId":"1:543188099837:web:c0d0f04a4704ddd2cb9494","storageBucket":"auht-app.appspot.com","apiKey":"AIzaSyALk0wjXoyQpjNvqkSOi0brU9v3zrizpDI","authDomain":"auht-app.firebaseapp.com","messagingSenderId":"543188099837"})),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
