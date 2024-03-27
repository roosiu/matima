import { Component, inject, OnInit } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { Welcome_EN } from '../enums/main';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  name: any = '';
  points: any;
  language: any;
  welcome = Welcome_EN;
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.storageService
      .getAll()
      .then((response) => {
        console.log(response);
        this.language = response['language'];
        this.name = response['name'];
        this.points = response['points'];
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeLang(lang: string) {
    this.storageService.set('language', lang);
    window.location.reload();
  }
}
