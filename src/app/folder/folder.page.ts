import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonModal,
  IonInput,
  IonToast,
  IonToggle,
  IonBackButton,
} from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { Welcome_EN } from '../enums/main';
import {
  pencil,
  close,
  arrowBack,
  checkmark,
  musicalNote,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonToggle,
    IonToast,
    IonModal,
    IonIcon,
    IonButton,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonModal,
    CommonModule,
    IonInput,
    FormsModule,
    RouterLink,
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  name: any = '';
  points: any;
  language: any;
  welcome = Welcome_EN;
  music: any;
  appPages: { title: string; url: string; icon: string }[] = [];
  constructor(
    private storageService: StorageService,
    private menuService: MenuService
  ) {
    addIcons({
      pencil,
      close,
      arrowBack,
      checkmark,
      musicalNote,
      plus: 'assets/icon/plus.svg',
      minus: 'assets/icon/minus.svg',
      multiplication: 'assets/icon/multiplication.svg',
      division: 'assets/icon/division.svg',
    });
  }

  ngOnInit() {
    this.menuService.initializeAppPages().then(() => {
      this.appPages = this.menuService.appPages;
    });
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
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
  goBack() {
    window.history.back();
  }
  changeLang(lang: string) {
    this.storageService.set('language', lang);
    window.location.reload();
  }

  changeName(name: any) {
    this.storageService.set('name', name).then(() => {
      window.location.reload();
    });
  }

  changeMusic(state: any) {
    if (state.detail.checked) {
      state.detail.checked = 'true';
    } else {
      state.detail.checked = 'false';
    }

    this.storageService.set('music', state.detail.checked).then(() => {
      this.music = state.detail.checked;
      window.location.reload();
    });
  }
}
