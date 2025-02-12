import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonList, IonInput, IonLabel, IonTextarea } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
// IonModule


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonList,
    IonInput,
    FormsModule,
    IonTextarea,
    NgFor,
    IonLabel,
    IonTextarea,
  ],
  exports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonList,
    IonInput,
    FormsModule,
    NgFor,
    IonLabel,
    IonTextarea,
  ]
})
export class SharedModule { }
