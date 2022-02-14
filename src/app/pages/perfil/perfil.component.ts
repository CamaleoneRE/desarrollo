import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, AlertController, LoadingController, ToastController  } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  cliente: Cliente ={
    uid: '',
    email: '',
    nombre:'',
    celular: '',
    foto: '',
    mesa: '',
    direccion: null,
  };

  loading: any;

  newFile: any;

  uid = '';
  suscriberUserInfo: Subscription;
  ingresarEnable = false;

  constructor(public menucontroler: MenuController,
              public firebaseauthService: FirebaseauthService,
              public firestoreService: FirestoreService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public alertController: AlertController,
              public firestorageService: FirestorageService,
              private modalController: ModalController) {

        this.firebaseauthService.stateAuth().subscribe( res => {
                console.log(res);
                if (res !== null) {
                   this.uid = res.uid;
                   this.getUserInfo(this.uid);
                } else {
                    this.initCliente();
                }
        });

  }

  async ngOnInit() {
       const uid = await this.firebaseauthService.getUid();
       console.log(uid);
  }

  initCliente() {
      this.uid = '';
      this.cliente = {
        uid: '',
        email: '',
        nombre:'',
        celular: '',
        foto: '',
        mesa: '',
        direccion: null,
      };
      console.log(this.cliente);
  }

  openMenu() {
    console.log('open menu');
    this.menucontroler.toggle('principal');
  }

  async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.newFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = ((image) => {
            this.cliente.foto = image.target.result as string;
        });
        reader.readAsDataURL(event.target.files[0]);
      }
   }

  async registrarse() {
    this.presentLoading();
      const credenciales = {
          email: this.cliente.email,
          password: this.cliente.celular,
      };
      const res = await this.firebaseauthService.registrar(credenciales.email, credenciales.password).catch( err => {
          console.log( 'error -> ',  err);
      });
      const uid = await this.firebaseauthService.getUid();
      this.cliente.uid = uid;
      this.guardarUser();
      this.presentToast('Registrado con exito');

   }

   async guardarUser() {
      this.presentLoading();
      const path = 'Clientes';
      const name = this.cliente.nombre;
      if (this.newFile !== undefined) {
        const res = await this.firestorageService.uploadImage(this.newFile, path, name);
        this.cliente.foto = res;
      }
      this.firestoreService.createDoc(this.cliente, path, this.cliente.uid).then( res => {
        this.loading.dismiss();
        this.presentToast('guardado con exito');
          console.log('guardado con exito');
      }).catch( error => {
        this.presentToast('No se pudo cargar');
      });
    }

   async salir() {
      this.firebaseauthService.logout();
      this.suscriberUserInfo.unsubscribe();
   }

   getUserInfo(uid: string) {
       console.log('getUserInfo');
       const path = 'Clientes';
       this.suscriberUserInfo = this.firestoreService.getDoc<Cliente>(path, uid).subscribe( res => {
              if (res !== undefined) {
                this.cliente = res;
              }
       });
   }

   ingresar() {
      const credenciales = {
        email: this.cliente.email,
        password: this.cliente.celular,
      };
      this.firebaseauthService.login(credenciales.email, credenciales.password);
   }

   async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'normal',
      message: 'guardando...',
    });
    await this.loading.present();
    //await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      cssClass: 'normal',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }




}
