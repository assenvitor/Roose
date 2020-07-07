import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Provider } from 'src/providers/Provider';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

// import { CheckInProvider } from 'src/providers/checkInProvider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  matches: string[];
  isRecording = false;
  constructor(
    private speechRecognition: SpeechRecognition,
    private cd: ChangeDetectorRef,
    private provider: Provider,
    private tts: TextToSpeech
  ) {

  }
 
  Start() {
    let options = {
      language: 'pt-BR',
      matches: 5
    }
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      for(let i=0; matches.length>i; i++){
        if(matches[i].toUpperCase().includes('ABRIR FILMES')){
         this.getfilme(); 
         break
      }  
    }
      this.cd.detectChanges();
    });
    this.isRecording = true;

  }

filme
  getfilme () {
    this.provider.getFilme()
    .then((res: any) => {
       this.filme = res.filme;
       this.resposta(res.filme).then(()=>{
         //Executado apos o termino da fala
       })
       this.cd.detectChanges();

     })
  }

resposta (texto:string){
  let options={
    text:texto,
    locale:'en-US'
  }
  return this.tts.speak(options)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}




  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }
  
}

