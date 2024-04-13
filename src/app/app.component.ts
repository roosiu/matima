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
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { Platform } from '@ionic/angular';
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
    SpinnerComponent,
  ],
})
export class AppComponent implements OnInit {
  name: any = '';
  points: any;
  language: any = this.storageService.get('language') || 'EN';
  pointText: any;
  dedication: any;
  music: any;
  appPages: { title: string; url: string; icon: string }[] = [];
  isLoading = true;
  constructor(
    private storageService: StorageService,
    private menuService: MenuService,
    platform: Platform
  ) {
    platform.ready().then(() => {
      this.isLoading = false;
    });
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
      this.dedication = this.menuService.dedication;
    });

    this.storageService
      .getAll()
      .then((response) => {
        this.language = response['language'];
        this.name = response['name'] ? response['name'] : 'Player';
        this.points = response['points'] ? response['points'] : 0;
        this.music = response['music'] ? response['music'] : 'true';
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
