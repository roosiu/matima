import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calculatorOutline, happyOutline } from 'ionicons/icons';
import { StorageService } from './services/storage.service';
import { Menu_EN, Menu_PL } from './enums/main';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class AppComponent implements OnInit {
  name: any = '';
  points: any;
  language: any = localStorage.getItem('CapacitorStorage.language') || 'EN';
  pointText = this.language === 'PL' ? Menu_PL.POINT_INFO : Menu_EN.POINT_INFO;
  constructor(private storageService: StorageService) {
    addIcons({
      happyOutline,
      calculatorOutline,
      plus: 'assets/icon/plus.svg',
      minus: 'assets/icon/minus.svg',
      multiplication: 'assets/icon/multiplication.svg',
      division: 'assets/icon/division.svg',
    });
  }
  public appPages = [
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
      title: this.language === 'PL' ? Menu_PL.SUBTRACT : Menu_EN.SUBTRACT,
      url: '/folder/minus',
      icon: 'minus',
    },
    {
      title: this.language === 'PL' ? Menu_PL.MULTIPLY : Menu_EN.MULTIPLY,
      url: '/folder/multiplication',
      icon: 'multiplication',
    },
    {
      title: this.language === 'PL' ? Menu_PL.DIVIDE : Menu_EN.DIVIDE,
      url: '/folder/division',
      icon: 'division',
    },
  ];
  ngOnInit(): void {
    this.storageService
      .getAll()
      .then((response) => {
        console.log(response);
        this.language = response['language'];
        this.name = response['name'] ? response['name'] : 'Player';
        this.points = response['points'] ? response['points'] : 0;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
