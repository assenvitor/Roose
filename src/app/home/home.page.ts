/*import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FilmeProvider } from 'src/providers/filmeProvider';
// import { CheckInProvider } from 'src/providers/checkInProvider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  matches: string[];
  isRecording = false;
  constructor(
    private speechRecognition: SpeechRecognition,
    private cd: ChangeDetectorRef,
    private filmeProvider: FilmeProvider
  ) {

  }


  Start() {
    let options = {
      language: 'pt-BR'
    }
    this.speechRecognition.startListening().subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }
  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  ngOnInit() {
    this.getFilme();
    // this.getGreetings();
  }

  filme
  getFilme() {
    this.filmeProvider.getFilme()
      .then((res: any) => {
        this.filme = res.filme;
      })
  }

} */

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FilmeProvider } from 'src/providers/filmeProvider';
import { NavController } from '@ionic/angular';
// import { CheckInProvider } from 'src/providers/checkInProvider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{

  bgcolor: string = 'red';

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition){

  }

  ngOnInit(){

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if(!hasPermission) {

          this.speechRecognition.requestPermission()
          .then(

            () => console.log('Permitir'),
            () => console.log('Negar')

          )

        }

      });

  }


  start() {

    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.bgcolor = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )

}

}  
