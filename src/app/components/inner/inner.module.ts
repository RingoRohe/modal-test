import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InnerComponent } from './inner.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InnerComponent
  ],
  declarations: [InnerComponent]
})
export class InnerComponentModule { }
