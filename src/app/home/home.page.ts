import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) { }

  async openModal() {
    const m = await this.modalController.create({
      component: ModalComponent
    });
    m.present();

    const { data, role } = await m.onDidDismiss();

    if (role === 'confirm') {
      alert(`Data: ${data}!`);
    }
  }
}
