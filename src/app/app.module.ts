import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SlideComponent } from './slide/slide.component';
import { AutenticaComponent } from './autentica/autentica.component';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FilmeProvider } from '../providers/filmeProvider';
// import { CheckInProvider } from '../providers/checkInProvider';

@NgModule({
  declarations: [AppComponent, SlideComponent, AutenticaComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    FilmeProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }