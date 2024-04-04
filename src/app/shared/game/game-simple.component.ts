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
  IonLabel,
  IonList,
  IonListHeader,
  IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { playCircle, thumbsUp } from 'ionicons/icons';
import { AnimationService } from 'src/app/services/animation.service';
import { FancyNumberPipe } from 'src/app/pipes/fancy-number.pipe';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-game',
  templateUrl: './game-simple.component.html',
  styleUrls: ['./game-simple.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonListHeader,
    IonList,
    IonLabel,
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
  gameSteps: number = 10;
  step: number = 1;
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  buttonsNumbers: number[] = [];
  optionSymbol: any;
  howManyButton = 3;
  goodAnswers: number = 0;
  badAnswers: number = 0;
  constructor(
    private animationService: AnimationService,
    private elementRef: ElementRef,
    private storageService: StorageService
  ) {
    addIcons({
      playCircle,
      thumbsUp,
    });
  }

  ngOnInit() {
    switch (this.option) {
      case 'add':
        this.optionSymbol = '+';
        this.addGame();
        break;
      case 'subtract':
        this.optionSymbol = '-';
        this.substractGame();
        break;
      case 'multiplication':
        this.optionSymbol = '×';
        this.multiplicationGame();
        break;
      case 'divide':
        this.optionSymbol = '÷';
        this.divideGame();
        break;
      default:
        break;
    }
  }
  addGame() {
    this.firstNumber = Math.floor(Math.random() * this.number + 1);
    this.secondNumber = Math.floor(
      Math.random() * (this.number - this.firstNumber + 1)
    );
    this.buttonsNumbers = [];
    this.result = this.firstNumber + this.secondNumber;
    let usedNumbers = new Set<number>();
    usedNumbers.clear();
    this.buttonsNumbers.push(this.result);
    usedNumbers.add(this.result);
    for (let i = 0; i < this.howManyButton; i++) {
      let randomNum: number;
      do {
        randomNum = Math.floor(Math.random() * this.number);
      } while (usedNumbers.has(randomNum));
      usedNumbers.add(randomNum);
      this.buttonsNumbers.push(randomNum);
    }
    this.buttonsNumbers.sort(() => Math.random() - 0.5); // in-place shuffle// take first 4 elements
    if (this.step > 1) {
      this.animationEffect();
    }
  }

  substractGame() {
    this.firstNumber = Math.floor(Math.random() * this.number + 1);
    this.secondNumber = Math.floor(Math.random() * (this.firstNumber + 1));
    this.buttonsNumbers = [];
    this.result = this.firstNumber - this.secondNumber;
    let usedNumbers = new Set<number>();
    usedNumbers.clear();
    this.buttonsNumbers.push(this.result);
    usedNumbers.add(this.result);
    for (let i = 0; i < this.howManyButton; i++) {
      let randomNum: number;
      do {
        randomNum = Math.floor(Math.random() * this.number);
      } while (usedNumbers.has(randomNum));
      usedNumbers.add(randomNum);
      this.buttonsNumbers.push(randomNum);
    }
    this.buttonsNumbers.sort(() => Math.random() - 0.5); // in-place shuffle// take first 4 elements
    if (this.step > 1) {
      this.animationEffect();
    }
  }

  multiplicationGame() {
    this.firstNumber = Math.floor(Math.random() * this.number + 1);
    this.secondNumber = Math.floor(Math.random() * this.number + 1);
    this.buttonsNumbers = [];
    this.result = this.firstNumber * this.secondNumber;
    let usedNumbers = new Set<number>();
    usedNumbers.clear();
    this.buttonsNumbers.push(this.result);
    usedNumbers.add(this.result);
    for (let i = 0; i < this.howManyButton; i++) {
      let randomNum: number;
      do {
        randomNum = Math.floor(
          Math.random() * (this.number * this.firstNumber + 1)
        );
      } while (usedNumbers.has(randomNum));
      usedNumbers.add(randomNum);
      this.buttonsNumbers.push(randomNum);
    }
    this.buttonsNumbers.sort(() => Math.random() - 0.5); // in-place shuffle// take first 4 elements
    if (this.step > 1) {
      this.animationEffect();
    }
  }
  divideGame() {
    this.firstNumber = Math.floor(Math.random() * this.number + 1);
    this.secondNumber = Math.floor(Math.random() * this.firstNumber);
    while (this.firstNumber % this.secondNumber !== 0) {
      this.secondNumber = Math.floor(Math.random() * (this.firstNumber + 1));
    }
    this.buttonsNumbers = [];
    this.result = this.firstNumber / this.secondNumber;
    let usedNumbers = new Set<number>();
    usedNumbers.clear();
    this.buttonsNumbers.push(this.result);
    usedNumbers.add(this.result);
    for (let i = 0; i < this.howManyButton; i++) {
      let randomNum: number;
      do {
        randomNum = Math.floor(Math.random() * this.number);
      } while (usedNumbers.has(randomNum));
      usedNumbers.add(randomNum);
      this.buttonsNumbers.push(randomNum);
    }
    this.buttonsNumbers.sort(() => Math.random() - 0.5); // in-place shuffle// take first 4 elements
    if (this.step > 1) {
      this.animationEffect();
    }
  }

  checkAnswer(number: number, event: any) {
    event.srcElement.disabled = true; // disable the button
    if (number === this.result) {
      this.goodAnswers++;
      let allButtons =
        this.elementRef.nativeElement.querySelectorAll('.game-button');
      allButtons.forEach((element: any) => {
        this.animationService.scaleOut(element);
        this.animationService.changeColor(element, '--background', '#fbcf4d');
      });

      setTimeout(() => {
        allButtons.forEach((button: HTMLButtonElement) => {
          button.disabled = false;
        });
        this.step++;
        switch (this.option) {
          case 'add':
            this.addGame();
            break;
          case 'subtract':
            this.substractGame();
            break;
          case 'multiplication':
            this.multiplicationGame();
            break;
          case 'divide':
            this.divideGame();
            break;
          default:
            break;
        }
      }, 800);
    } else {
      const targetElement = event.target as HTMLElement;

      if (targetElement) {
        this.animationService.changeColor(targetElement, '--background', 'red');
        this.animationService.shakeAnimation(targetElement);
      }
      this.badAnswers++;
    }
  }

  goBack() {
    window.history.go(-1);
  }

  animationEffect() {
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
  checkPoints() {
    //TODO
  }
  addPoints(points: string) {
    this.storageService.set('name', points).then(() => {
      //TODO
    });
  }
}
