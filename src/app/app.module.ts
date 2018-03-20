import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AcademyPage } from '../pages/academy/academy';
import { FlexibleFinancePage } from '../pages/flexible-finance/flexible-finance';
import { ConveyorsPage } from '../pages/conveyors/conveyors';
import { AgentsPage } from '../pages/agents/agents';
import { DevelopersPage } from '../pages/developers/developers';
import { InvestmentsPage } from '../pages/investments/investments';
import { RentalsPage } from '../pages/rentals/rentals';
import { ListingsPage } from '../pages/listings/listings';
import { NewsdetailPage } from '../pages/newsdetail/newsdetail';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage }  from '../pages/login/login';
import { SignupPage }  from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';

import { IonicStorageModule } from '@ionic/storage';

import { UserData } from '../providers/user-data';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    AboutPage,
    AcademyPage,
    FlexibleFinancePage,
    ConveyorsPage,
    DevelopersPage,
    AgentsPage,
    RentalsPage,
    InvestmentsPage,
    ListingsPage,
    NewsdetailPage,
    ContactPage,
    TabsPage,
    ParallaxHeaderDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {

      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: ContactPage, name: 'ContactPage', segment: 'contact' },
        { component: AboutPage, name: 'AboutPage', segment: 'about' },
        { component: FlexibleFinancePage, name: 'FlexibleFinancePage', segment: 'flexible' },
        { component: ConveyorsPage, name: 'ConveyorsPage', segment: 'conveyors' },
        { component: DevelopersPage, name: 'DevelopersPage', segment: 'developers' },
        { component: AgentsPage, name: 'AgentsPage', segment: 'agents' },
        { component: RentalsPage, name: 'RentalsPage', segment: 'rentals' },
        { component: InvestmentsPage, name: 'InvestmentsPage', segment: 'investments' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]

    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AboutPage,
    AcademyPage,
    FlexibleFinancePage,
    ConveyorsPage,
    DevelopersPage,
    AgentsPage,
    RentalsPage,
    InvestmentsPage,
    ListingsPage,
    NewsdetailPage,
    ContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
