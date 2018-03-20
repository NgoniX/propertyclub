import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FlexibleFinancePage } from '../pages/flexible-finance/flexible-finance';
import { ConveyorsPage } from '../pages/conveyors/conveyors';
import { AgentsPage } from '../pages/agents/agents';
import { DevelopersPage } from '../pages/developers/developers';
import { InvestmentsPage } from '../pages/investments/investments';
import { RentalsPage } from '../pages/rentals/rentals';
import { TabsPage } from '../pages/tabs/tabs';

import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  appPages: PageInterface[] = [
      { title: 'Home', name: 'TabsPage', component: TabsPage, icon: 'home' },
      { title: 'Contact Us', name: 'ContactPage', component: ContactPage, icon: 'call' },
      { title: 'About Us', name: 'AboutPage', component: AboutPage, icon: 'information-circle' },
      { title: 'Flexible Finance', name: 'FlexibleFinancePage', component: FlexibleFinancePage, icon: 'logo-usd' },
      { title: 'Conveyors', name: 'ConveyorsPage', component: ConveyorsPage, icon: 'contact' },
      { title: 'Developers & Contractors', name: 'DevelopersPage', component: DevelopersPage, icon: 'briefcase' },
      { title: 'Agents', name: 'AgentsPage', component: AgentsPage, icon: 'man' },
      { title: 'Rentals Portfolio', name: 'RentalsPage', component: RentalsPage, icon: 'clipboard' },
      { title: 'Investments', name: 'InvestmentsPage', component: InvestmentsPage, icon: 'cash' },
    ];

  rootPage: any = TabsPage;
  page: any;

    // used for an example of ngFor and navigation
    
  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public userData: UserData,
    public storage: Storage,
    public menu: MenuController,
    public splashScreen: SplashScreen,
    public events: Events) {



    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);

    this.listenToLoginEvents();

  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.splashScreen.hide();

      this.statusBar.backgroundColorByHexString("#0199cb");

   
    });
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    // Set the root of the nav with params if it's a tab index
  } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userData.logout();
    }
  }

  isActive(page){
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

}
