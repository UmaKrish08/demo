import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonRefresherContent,IonToolbar, IonTitle, IonContent,IonItem,IonButton,IonActionSheet,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent} from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,CommonModule,IonContent, IonToolbar, IonTitle, IonItem,IonContent,IonButton,IonActionSheet,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent],
})
export class HomePage {
  // public isCardVisible: boolean = true; // State to control card visibility

  // public actionSheetButtons = [
  //   {
  //     text: 'Delete',
  //     role: 'destructive',
  //     data: {
  //       action: 'delete',
  //     },
     
  //   },
  //   {
  //     text: 'Share',
  //     data: {
  //       action: 'share',
  //     },
  //     handler: () => {
  //       console.log('Share action'); // Handle share action here if needed
  //     },
  //   },
  //   {
  //     text: 'Cancel',
  //     role: 'cancel',
  //     data: {
  //       action: 'cancel',
  //     },
  //   },
  // ];

  constructor() {}

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
}

