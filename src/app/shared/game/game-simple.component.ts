import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonProgressBar,
  IonButton,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonModal,
  IonContent,
  IonInput,
  IonToast,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { playCircle, thumbsUp } from 'ionicons/icons';
import { AnimationService } from 'src/app/services/animation.service';
import { FancyNumberPipe } from 'src/app/pipes/fancy-number.pipe';
@Component({
  selector: 'app-game',
  templateUrl: './game-simple.component.html',
  styleUrls: ['./game-simple.component.scss'],
  standalone: true,
  imports: [
    IonToast,
    IonInput,
    IonContent,
    IonModal,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonButton,
    IonProgressBar,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonCard,
    IonCardContent,
    FancyNumberPipe,
  ],
})
export class GameComponent implements OnInit {
  @Input() type: string = '';
  @Input() number: number = 0;
  @Input() option: string = '';
  gameSetps: number = 2;
  step: number = 1;
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  buttonsNumbers: number[] = [];
  constructor(
    private animationService: AnimationService,
    private elementRef: ElementRef
  ) {
    addIcons({
      playCircle,
      thumbsUp,
    });
  }

  ngOnInit() {
    switch (this.type) {
      case 'simple':
        this.simpleGame();
        break;
      case 'typenumber':
        this.typeNumberGame();
        break;
      default:
        break;
    }
  }
  simpleGame() {
    this.firstNumber = Math.floor(Math.random() * this.number + 1);
    this.secondNumber = Math.floor(
      Math.random() * (this.number - this.firstNumber + 1)
    );
    this.result = this.firstNumber + this.secondNumber;
    this.buttonsNumbers = [];
    let usedNumbers = new Set<number>();

    usedNumbers.clear();

    this.buttonsNumbers.push(this.result);
    usedNumbers.add(this.result);
    for (let i = 0; i < 3; i++) {
      let randomNum: number;
      do {
        randomNum = Math.floor(Math.random() * this.number);
      } while (usedNumbers.has(randomNum));
      usedNumbers.add(randomNum);
      this.buttonsNumbers.push(randomNum);
    }
    this.buttonsNumbers.sort(() => Math.random() - 0.5); // in-place shuffle// take first 4 elements
    setTimeout(() => {
      let elements =
        this.elementRef.nativeElement.querySelectorAll('.scaleIn-animate');
      let delay = 100;
      elements.forEach((element: any) => {
        setTimeout(() => {
          this.animationService.scaleIn(element);
        }, delay);
        delay += 150;
      });
    }, 100);
  }

  checkAnswer(number: number) {
    if (number === this.result) {
      this.step++;
      this.simpleGame();
    }
  }

  typeNumberGame() {
    console.log('tu będzie type number game');
  }
  goBack() {
    window.history.go(-1);
  }
}
