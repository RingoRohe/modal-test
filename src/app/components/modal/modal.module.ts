import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal.component';
import { InnerComponent } from '../inner/inner.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InnerComponent
  ],
  declarations: [ModalComponent]
})
export class ModalComponentModule { }
