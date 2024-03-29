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
import { MenuService } from './services/menu.service';
import { App } from '@capacitor/app';
import { MusicComponent } from './shared/music/music.component';
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
    MusicComponent,
  ],
})
export class AppComponent implements OnInit {
  name: any = '';
  points: any;
  language: any = this.storageService.get('language') || 'EN';
  pointText: any;
  music: any;
  appPages: { title: string; url: string; icon: string }[] = [];

  constructor(
    private storageService: StorageService,
    private menuService: MenuService
  ) {
    addIcons({
      happyOutline,
      calculatorOutline,
      plus: 'assets/icon/plus.svg',
      minus: 'assets/icon/minus.svg',
      multiplication: 'assets/icon/multiplication.svg',
      division: 'assets/icon/division.svg',
    });
  }

  ngOnInit(): void {
    //  exiting in android phone by clicking hardware back button
    App.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        App.exitApp();
      }
    });

    this.menuService.initializeAppPages().then(() => {
      this.appPages = this.menuService.appPages;
      this.pointText = this.menuService.pointText;
    });

    this.storageService
      .getAll()
      .then((response) => {
        this.language = response['language'];
        this.name = response['name'] ? response['name'] : 'Player';
        this.points = response['points'] ? response['points'] : 0;
        this.music = response['music'];
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
