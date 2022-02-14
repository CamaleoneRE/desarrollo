import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { Producto } from 'src/app/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-set-productos',
  templateUrl: './set-productos.component.html',
  styleUrls: ['./set-productos.component.scss'],
})
export class SetProductosComponent implements OnInit {

  productos: Producto[] = [];

  newProducto: Producto;


  enableNewProducto= false;

  loading: any;

  newImage= '';
  newFile= '';

  private path= 'Productos/';



  constructor(public menucontroler: MenuController,
                public firestoreService: FirestoreService,
                public loadingController: LoadingController,
                public toastController: ToastController,
                public alertController: AlertController,
                public firestorageService: FirestorageService){ }

  ngOnInit() {
    this.getProductos();
  }

  openMenu(){
    console.log('open menu');
    this.menucontroler.toggle('principal');
  }

  async guardarProducto(){
    this.presentLoading();
    const path ='Productos';
    const name = this.newProducto.nombre;
    const res = await this.firestorageService.uploadImage(this.newFile, path, name);
    this.newProducto.foto = res;
    this.firestoreService.createDoc(this.newProducto, this.path, this.newProducto.id).then(() =>{
      this.loading.dismiss();
      this.presentToast('guardado con exito');
    }).catch(error =>{
      this.presentToast('No se pudo cargar');
    });
  }
  getProductos(){
    this.firestoreService.getCollection<Producto>(this.path).subscribe( res => {
       this.productos= res;
    });
  }

  async deleteProducto(producto: Producto){
   const alert = await this.alertController.create({
        cssClass: 'normal',
        header: 'Advertencia',
        message: ' Seguro deseas <strong>eliminar</strong> este menu',
        buttons: [
          {
            text: 'cancelar',
            role: 'cancel',
            cssClass: 'normal',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
              //this.alertController.dismiss();
            }
          }, {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Okay');
              this.firestoreService.deleteDoc(this.path, producto.id).then(res => {
                this.alertController.dismiss();
                this.presentToast('eliminado con exito');
            }).catch(error =>{
              this.presentToast('No se pudo eliminar');
            });
            }
          }
        ]
      });
      await alert.present();
  }

   //

  nuevo(){
    this.enableNewProducto=true;
    this.newProducto = {
      nombre: '',
      precioNormal: null,
      precioReducido: null,
      descripcion: '',
      foto: '',
      id: this.firestoreService.getId(),
      fecha: new Date(),
    };

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

  async newImageUpload(event: any){
    if(event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader =new FileReader();
      reader.onload=((image) =>{
        this.newProducto.foto = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }

  }
}

