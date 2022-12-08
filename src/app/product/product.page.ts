import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  id?: number;
  product: any;
  dataService: DataService = new DataService();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'))
    this.product = this.dataService.products.find(product => product.id === this.id)
  }

}
