import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  dataService: DataService = new DataService();
  cartItems: any[] = this.dataService.cartItems;
  total: number = this.cartItems.reduce((a, b) => a + (b['price'] || 0), 0);

  // compute total
  computeTotal() {

  }

  constructor() {}

}
