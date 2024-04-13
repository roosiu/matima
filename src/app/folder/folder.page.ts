import { Component, ElementRef, inject } from '@angular/core';
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
  IonFooter,
  IonLoading,
  IonSpinner,
  IonLabel,
  IonItem,
  Platform,
  IonImg,
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
import { FancyNumberPipe } from '../pipes/fancy-number.pipe';
import { AnimationService } from '../services/animation.service';
import { GameComponent } from '../shared/game/game-simple.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonItem,
    IonLabel,
    IonSpinner,
    IonLoading,
    IonFooter,
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
    FancyNumberPipe,
    GameComponent,
  ],
})
export class FolderPage {
  public folder!: string;
  public queryParams: any;
  private activatedRoute = inject(ActivatedRoute);
  name: any = '';
  points: any;
  language: any;
  welcome = Welcome_EN;
  pointText: any;
  musicText: any;
  editName: any;
  cancel: any;
  save: any;
  success: any;
  ads: any;
  music: string = 'true';
  appPages: { title: string; url: string; icon: string }[] = [];
  addPages: {
    title: string;
    url: string;
    queryParams: object;
    icon: string;
  }[] = [];
  subtractPages: {
    title: string;
    url: string;
    queryParams: object;
    icon: string;
  }[] = [];
  multiplicationPages: {
    title: string;
    url: string;
    queryParams: object;
    icon: string;
  }[] = [];
  dividePages: {
    title: string;
    url: string;
    queryParams: object;
    icon: string;
  }[] = [];
  constructor(
    private storageService: StorageService,
    private menuService: MenuService,
    private animationService: AnimationService,
    private elementRef: ElementRef,
    private platform: Platform
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
    this.platform.ready().then(() => {
      this.menuService.initializeAppPages().then(() => {
        this.appPages = this.menuService.appPages;
        this.addPages = this.menuService.addPages;
        this.subtractPages = this.menuService.subtractPages;
        this.multiplicationPages = this.menuService.multiplicationPages;
        this.dividePages = this.menuService.dividePages;
        this.pointText = this.menuService.pointText;
        this.musicText = this.menuService.musicText;
        this.editName = this.menuService.editName;
        this.cancel = this.menuService.cancel;
        this.save = this.menuService.save;
        this.success = this.menuService.success;
        this.ads = this.menuService.ads;
      });
      this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
      this.queryParams = this.activatedRoute.snapshot.queryParams;

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
    });
  }
  ionViewDidEnter() {
    this.animateElements('.scaleIn-animate', 'scaleIn');
  }
  ionViewWillLeave() {
    this.animateElements('.scaleIn-animate', 'scaleOut');
  }
  //FIXME animation not showing button in android
  async animateElements(className: string, animation: string) {
    const elements = this.elementRef.nativeElement.querySelectorAll(className);
    for (const element of elements) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (animation === 'scaleIn') {
        this.animationService.scaleIn(element);
      } else {
        this.animationService.scaleOut(element);
      }
    }
  }
  goBack() {
    window.history.back();
  }
  changeLang(lang: string) {
    this.storageService.set('language', lang).then(() => {
      window.location.reload();
    });
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
