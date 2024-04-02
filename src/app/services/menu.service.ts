import { Injectable } from '@angular/core';
import {
  Menu_EN,
  Menu_PL,
  Menu_EN_Add,
  Menu_PL_Add,
  Menu_EN_Subtract,
  Menu_PL_Subtract,
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
  public subtractPages: { title: string; url: string; icon: string }[] = [];
  pointText: string = '';
  constructor(private storageService: StorageService) {}

  initializeAppPages(): Promise<void> {
    return new Promise((resolve) => {
      this.storageService.get('language').then((value) => {
        this.language = value.value;
        if (this.language) {
          this.pointText =
            this.language === 'PL' ? Menu_PL.POINT_INFO : Menu_EN.POINT_INFO;
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
                this.language === 'PL' ? Menu_PL.MULTIPLY : Menu_EN.MULTIPLY,
              url: '/folder/multiplication',
              icon: 'multiplication',
            },
            {
              title: this.language === 'PL' ? Menu_PL.DIVIDE : Menu_EN.DIVIDE,
              url: '/folder/division',
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
              url: '/folder/profile',
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_TWENTY
                  : Menu_EN_Subtract.FROM_TWENTY,
              url: '/folder/profile',
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_THIRTY
                  : Menu_EN_Subtract.FROM_THIRTY,
              url: '/folder/profile',
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_FORTY
                  : Menu_EN_Subtract.FROM_FORTY,
              url: '/folder/profile',
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_FIFTY
                  : Menu_EN_Subtract.FROM_FIFTY,
              url: '/folder/profile',
              icon: 'minus',
            },
            {
              title:
                this.language === 'PL'
                  ? Menu_PL_Subtract.FROM_ONE_HUNDRED
                  : Menu_EN_Subtract.FROM_ONE_HUNDRED,
              url: '/folder/profile',
              icon: 'minus',
            },
          ];

          resolve(); // Zwróć obietnicę, gdy  zostanie zainicjalizowane
        }
      });
    });
  }
}
