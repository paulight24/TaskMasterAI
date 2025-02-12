import { Injectable } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor() { }


  async speakText(text: string) {
    await TextToSpeech.speak({
      text: text ?? 'This is a sample text.',
      lang: 'en-US',
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
    });
  }

  async stop() {
    await TextToSpeech.stop();
  };

}

/*
import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Injectable({ providedIn: 'root' })
export class SpeechService {
  constructor() {}

  async checkPermission(): Promise<boolean> {
    const permission = await SpeechRecognition.requestPermissions();
    return permission.authorizationStatus === 'granted';
  }

  async startListening(): Promise<string> {
    const available = await SpeechRecognition.available();
    if (!available) return '';

    const { matches } = await SpeechRecognition.start({
      language: 'en-US',
      maxResults: 1,
      partialResults: false,
      prompt: 'Speak now...' // Only for Android
    });

    return matches?.[0] || '';
  }

  async speakText(text: string) {
    await TextToSpeech.speak({
      text,
      lang: 'en-US',
      rate: 1.0
    });
  }
}

*/