import { Injectable } from '@angular/core';
import { Menu_EN, Menu_PL } from '../enums/main';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  language: any;
  public appPages: { title: string; url: string; icon: string }[] = [];
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
          resolve(); // Zwróć obietnicę, gdy appPages zostanie zainicjalizowane
        }
      });
    });
  }
}
