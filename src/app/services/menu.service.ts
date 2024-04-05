import { Injectable } from '@angular/core';
import {
  Menu_EN,
  Menu_PL,
  Menu_EN_Add,
  Menu_PL_Add,
  Menu_EN_Subtract,
  Menu_PL_Subtract,
  Menu_PL_Multiplication,
  Menu_EN_Multiplication,
  Menu_EN_Divide,
  Menu_PL_Divide,
} from '../enums/main';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  language: any;
  public appPages: { title: string; url: string; icon: string }[] = [];
  public addPages: {
    title: string;
    url: string;
    queryParams: any;
    icon: string;
  }[] = [];
  public subtractPages: {
    title: string;
    url: string;
    queryParams: any;
    icon: string;
  }[] = [];
  public multiplicationPages: {
    title: string;
    url: string;
    queryParams: any;
    icon: string;
  }[] = [];
  public dividePages: {
    title: string;
    url: string;
    queryParams: any;
    icon: string;
  }[] = [];
  pointText: string = '';
  dedication: string = '';
  musicText: string = '';
  editName: string = '';
  cancel: string = '';
  save: string = '';
  success: string = '';
  ads: string = '';
  constructor(private storageService: StorageService) {}

  initializeAppPages(): Promise<void> {
    return new Promise((resolve) => {
      this.storageService.get('language').then((value) => {
        this.language = value.value;
        if (this.language) {
          this.pointText =
            this.language === 'PL' ? Menu_PL.POINT_INFO : Menu_EN.POINT_INFO;
          this.dedication =
            this.language === 'PL' ? Menu_PL.DEDICATION : Menu_EN.DEDICATION;
          this.musicText =
            this.language === 'PL' ? Menu_PL.MUSIC_TEXT : Menu_EN.MUSIC_TEXT;
          this.editName =
            this.language === 'PL' ? Menu_PL.EDIT_NAME : Menu_EN.EDIT_NAME;
          this.cancel =
            this.language === 'PL' ? Menu_PL.CANCEL : Menu_EN.CANCEL;
          this.save = this.language === 'PL' ? Menu_PL.SAVE : Menu_EN.SAVE;
          this.success =
            this.language === 'PL' ? Menu_PL.SUCCESS : Menu_EN.SUCCESS;
          this.ads = this.language === 'PL' ? Menu_PL.ADS : Menu_EN.ADS;
          this.appPages = [
            {
              title: 'Start',
              url: '/folder/start',
              icon: 'calculator-outline',
            },
            {
              title: this.language === 'PL' ? Menu_PL.PROFILE : Menu_EN.PROFILE,
              url: '/folder/profile',
              icon: 'happy-outline',
            },
            {
              title: this.language === 'PL' ? Menu_PL.ADD : Menu_EN.ADD,
              url: '/folder/plus',
              icon: 'plus',
            },
            {
              title:
                this.language === 'PL' ? Menu_PL.SUBTRACT : Menu_EN.SUBTRACT,
              url: '/folder/minus',
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL.MULTIPLICATION
                  : Menu_EN.MULTIPLICATION,
              url: '/folder/multiplication',
              icon: 'multiplication',
            },
            {
              title: this.language === 'PL' ? Menu_PL.DIVIDE : Menu_EN.DIVIDE,
              url: '/folder/divide',
              icon: 'division',
            },
          ];
          this.addPages = [
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Add.TO_TEN
                  : Menu_EN_Add.TO_TEN,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 10, option: 'add' },
              icon: 'plus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Add.TO_TWENTY
                  : Menu_EN_Add.TO_TWENTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 20, option: 'add' },
              icon: 'plus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Add.TO_THIRTY
                  : Menu_EN_Add.TO_THIRTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 30, option: 'add' },
              icon: 'plus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Add.TO_FORTY
                  : Menu_EN_Add.TO_FORTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 40, option: 'add' },
              icon: 'plus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Add.TO_FIFTY
                  : Menu_EN_Add.TO_FIFTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 50, option: 'add' },
              icon: 'plus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Add.TO_ONE_HUNDRED
                  : Menu_EN_Add.TO_ONE_HUNDRED,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 100, option: 'add' },
              icon: 'plus',
            },
          ];

          this.subtractPages = [
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_TEN
                  : Menu_EN_Subtract.FROM_TEN,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 10, option: 'subtract' },
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_TWENTY
                  : Menu_EN_Subtract.FROM_TWENTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 20, option: 'subtract' },
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_THIRTY
                  : Menu_EN_Subtract.FROM_THIRTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 30, option: 'subtract' },
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_FORTY
                  : Menu_EN_Subtract.FROM_FORTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 40, option: 'subtract' },
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_FIFTY
                  : Menu_EN_Subtract.FROM_FIFTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 50, option: 'subtract' },
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_ONE_HUNDRED
                  : Menu_EN_Subtract.FROM_ONE_HUNDRED,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 100, option: 'subtract' },
              icon: 'minus',
            },
          ];

          this.multiplicationPages = [
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Multiplication.TO_THREE
                  : Menu_EN_Multiplication.TO_THREE,
              url: '/folder/game',
              queryParams: {
                type: 'simple',
                number: 3,
                option: 'multiplication',
              },
              icon: 'multiplication',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Multiplication.TO_FOUR
                  : Menu_EN_Multiplication.TO_FOUR,
              url: '/folder/game',
              queryParams: {
                type: 'simple',
                number: 4,
                option: 'multiplication',
              },
              icon: 'multiplication',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Multiplication.TO_FIVE
                  : Menu_EN_Multiplication.TO_FIVE,
              url: '/folder/game',
              queryParams: {
                type: 'simple',
                number: 5,
                option: 'multiplication',
              },
              icon: 'multiplication',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Multiplication.TO_SIX
                  : Menu_EN_Multiplication.TO_SIX,
              url: '/folder/game',
              queryParams: {
                type: 'simple',
                number: 6,
                option: 'multiplication',
              },
              icon: 'multiplication',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Multiplication.TO_SEVEN
                  : Menu_EN_Multiplication.TO_SEVEN,
              url: '/folder/game',
              queryParams: {
                type: 'simple',
                number: 7,
                option: 'multiplication',
              },
              icon: 'multiplication',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Multiplication.TO_EIGHT
                  : Menu_EN_Multiplication.TO_EIGHT,
              url: '/folder/game',
              queryParams: {
                type: 'simple',
                number: 8,
                option: 'multiplication',
              },
              icon: 'multiplication',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Multiplication.TO_NINE
                  : Menu_EN_Multiplication.TO_NINE,
              url: '/folder/game',
              queryParams: {
                type: 'simple',
                number: 9,
                option: 'multiplication',
              },
              icon: 'multiplication',
            },
          ];
          this.dividePages = [
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_TWENTY
                  : Menu_EN_Divide.TO_TWENTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 20, option: 'divide' },
              icon: 'division',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_THIRTY
                  : Menu_EN_Divide.TO_THIRTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 30, option: 'divide' },
              icon: 'division',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_FORTY
                  : Menu_EN_Divide.TO_FORTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 40, option: 'divide' },
              icon: 'division',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_FIFTY
                  : Menu_EN_Divide.TO_FIFTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 50, option: 'divide' },
              icon: 'division',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_SIXTY
                  : Menu_EN_Divide.TO_SIXTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 60, option: 'divide' },
              icon: 'division',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_SEVENTY
                  : Menu_EN_Divide.TO_SEVENTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 70, option: 'divide' },
              icon: 'division',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_EIGHTY
                  : Menu_EN_Divide.TO_EIGHTY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 80, option: 'divide' },
              icon: 'division',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Divide.TO_NINETY
                  : Menu_EN_Divide.TO_NINETY,
              url: '/folder/game',
              queryParams: { type: 'simple', number: 90, option: 'divide' },
              icon: 'division',
            },
          ];

          resolve(); // Zwróć obietnicę, gdy  zostanie zainicjalizowane
        }
      });
    });
  }
}
