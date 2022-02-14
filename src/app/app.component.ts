import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
//import {SplashScreen} from '@ionic-native/splash-screen/ngx';
//import {StatusBar} from '@ionic-native/status-bar/ngx';
import { FirebaseauthService } from './services/firebaseauth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

    admin = false;

  constructor(
    private platform: Platform,
  //  private splashScreen: SplashScreen,
  //  private statusBar: StatusBar,
    private firebaseauthService: FirebaseauthService
  ){
    this.initializeApp();
  }


  initializeApp(){

    if( this.platform.is('capacitor')){
      this.platform.ready().then(()=>{
        //this.statusBar.styleDefault();
      //  this.splashScreen.hide();

      });
    }
    this.getUid();

  }

  getUid() {
    this.firebaseauthService.stateAuth().subscribe( res => {
          if (res !== null) {
              if (res.uid === 'PUmupRDogZdldKkQdKwhmS6ekLw1')  {
                  this.admin = true;
              } else {
                 this.admin = false;
              }
          } else {
            this.admin = false;
          }
    });
}


}
