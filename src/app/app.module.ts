import { DetailContactPage } from '../pages/detail-contact/detail-contact';
import { HttpClientModule } from '@angular/common/http';
import { People } from '../providers/people/people';
import { ActionPage } from './../pages/action/action';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Platform } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActionPage,
    DetailContactPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {   //tambah untuk menu atas atau bwh ios dan android
      'iconMode': 'ios',
      'tabsLayout': 'icon-left',
      platforms: {
        ios: {'tabsPlacement': 'bottom'},
        android: {'tabsPlacement': 'bottom'}
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActionPage,
    DetailContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    People,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
