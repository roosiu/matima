import { Component, Input, OnInit } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-music',
  template: '',
  styles: [],
  standalone: true,
  imports: [],
})
export class MusicComponent implements OnInit {
  @Input() music: any;

  constructor(public platform: Platform) {}

  location_audio: string = '';
  ngOnInit() {
    this.platform
      .ready()
      .then(() => {
        if (this.platform.is('android')) {
          this.location_audio = 'public/assets/sounds/';
        }
        NativeAudio.preload({
          assetId: 'number1',
          assetPath: this.location_audio + 'morning-funny-beat-7741.mp3',
          audioChannelNum: 1,
          isUrl: false,
        });
      })
      .then(() => {
        if (this.music == 'true') {
          setTimeout(() => {
            NativeAudio.play({ assetId: 'number1' });
            NativeAudio.loop({ assetId: 'number1' });
          }, 2000); // Delay in milliseconds});
        } else {
          NativeAudio.isPlaying({
            assetId: 'number1',
          }).then((result) => {
            NativeAudio.stop({
              assetId: 'number1',
            });

            NativeAudio.unload({
              assetId: 'number1',
            });
          });
        }
      });
  }
}
