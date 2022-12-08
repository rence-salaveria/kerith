import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dataService: DataService = new DataService();
  featuredProducts = this.dataService.featuredProducts
  constructor() {}

}
