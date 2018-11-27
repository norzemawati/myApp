import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    }

    //funtion alert
    doPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Login Dulu!!!",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }

    presentLoading() {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      loader.present();
    }
  

}
