import { DefaultModule } from './layouts/default/default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      {
      apiKey: "AIzaSyCZ3Q8V_3_AlCRBFXmJY-TTzLIfWeM3buA",
      authDomain: "ischool-app.firebaseapp.com",
      databaseURL: "https://ischool-app-default-rtdb.firebaseio.com",
      projectId: "ischool-app",
      storageBucket: "ischool-app.appspot.com",
      messagingSenderId: "136836367706",
      appId: "1:136836367706:web:ccecc1bf63ed3f05775f63",
      measurementId: "G-X1L1GWTPZW"
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
