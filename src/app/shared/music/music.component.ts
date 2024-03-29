import { Component, OnDestroy, OnInit } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-music',
  template: '',
  styles: [],
  standalone: true,
  imports: [],
})
export class MusicComponent implements OnInit, OnDestroy {
  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      NativeAudio.preload({
        assetId: 'number1',
        assetPath: 'public/assets/morning-funny-beat-7741.mp3',
        audioChannelNum: 1,
        isUrl: false,
      })
        .then(() => {
          setTimeout(() => {
            NativeAudio.play({ assetId: 'number1' });
            NativeAudio.loop({ assetId: 'number1' });
          }, 2000); // Delay in milliseconds
        })
        .catch((error) => {
          console.error('Error preloading audio:', error);
        });
    });
  }
  ngOnDestroy(): void {
    NativeAudio.stop({
      assetId: 'number1',
    });

    NativeAudio.unload({
      assetId: 'number1',
    });
  }

  ngOnInit() {}
}
