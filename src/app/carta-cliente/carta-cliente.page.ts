import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carta-cliente',
  templateUrl: './carta-cliente.page.html',
  styleUrls: ['./carta-cliente.page.scss'],
})
export class CartaClientePage implements OnInit {

  constructor(public alertCrtl:AlertController) { }

  ngOnInit() {
  }

   async presentAlert(){
       const alert = await this.alertCrtl.create({
         header:'Alert',
         subHeader:'Subtitle',
         message:'This is an alert message.',
         buttons: ['ok']
       });
       await alert.present();
     
   }

}
