import { Component } from '@angular/core';

import { ListingsPage } from '../listings/listings';
import { AcademyPage } from '../academy/academy';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListingsPage;
  tab3Root = AcademyPage;

  constructor() {

  }
}
