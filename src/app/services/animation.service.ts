import { Injectable } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor(private animationCtrl: AnimationController) {}

  scaleIn(baseEl: HTMLElement) {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(baseEl)
      .duration(600)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(0)', opacity: '0.9' },
        { offset: 0.7, transform: 'scale(1.1)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    animation.play();
  }
}
