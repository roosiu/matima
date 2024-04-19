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

  scaleOut(baseEl: HTMLElement) {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(baseEl)
      .duration(600)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.3, transform: 'scale(1.1)', opacity: '1' },
        { offset: 1, transform: 'scale(0)', opacity: '0.9' },
      ]);

    animation.play();
  }
  changeColor(baseEl: HTMLElement, style: string, color: string) {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(baseEl)
      .duration(300)
      .iterations(1)
      .to(style, color);

    animation.play();
  }

  shakeAnimation(baseEl: HTMLElement) {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(baseEl)
      .duration(600)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0)' },
        { offset: 0.15, transform: 'translateX(-3px)' },
        { offset: 0.3, transform: 'translateX(3px)' },
        { offset: 0.45, transform: 'translateX(-3px)' },
        { offset: 0.6, transform: 'translateX(3px)' },
        { offset: 0.75, transform: 'translateX(-3px)' },
        { offset: 0.9, transform: 'translateX(3px)' },
        { offset: 1, transform: 'translateX(0)' },
      ]);
    animation.play();
  }
  bubbleAnimation(baseEl: HTMLElement) {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(baseEl)
      .duration(300)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.2)' },
        { offset: 1, transform: 'scale(1)' },
      ]);
    animation.play();
  }
}
