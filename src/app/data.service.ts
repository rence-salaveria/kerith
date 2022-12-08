import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: any[] = [
    {
      id: 1,
      name: "Jacket 1",
      price: 450.75,
      image: "b1.jpg",
      isFeatured: true,
      productIsSale: false,
      isCarted: true
    },
    {
      id: 2,
      name: "Jacket 2",
      price: 500,
      image: "b2.jpg",
      isFeatured: false,
      productIsSale: false,
      isCarted: true
    },
    {
      id: 3,
      name: "Jacket 3",
      price: 525.30,
      image: "b3.jpg",
      isFeatured: false,
      productIsSale: false,
      isCarted: true
    },
    {
      id: 4,
      name: "Jacket 4",
      price: 600,
      image: "b4.jpg",
      isFeatured: true,
      productIsSale: true,
      isCarted: true
    },
    {
      id: 5,
      name: "Jacket 5",
      price: 350,
      image: "b5.jpg",
      isFeatured: false,
      productIsSale: true,
      isCarted: true
    },
    {
      id: 6,
      name: "Jacket 6",
      price: 850,
      image: "b6.jpg",
      isFeatured: false,
      productIsSale: true,
      isCarted: true
    },
    {
      id: 7,
      name: "Jacket 7",
      price: 600,
      image: "b7.jpg",
      isFeatured: true,
      productIsSale: true,
      isCarted: true
    },
    {
      id: 8,
      name: "Jacket 8",
      price: 570,
      image: "b8.jpg",
      isFeatured: true,
      productIsSale: false,
      isCarted: true
    },
    {
      id: 9,
      name: "Jacket 9",
      price: 580.50,
      image: "b9.jpg",
      isFeatured: true,
      productIsSale: false,
      isCarted: true
    },
    {
      id: 10,
      name: "Jacket 10",
      price: 300,
      image: "b10.jpg",
      isFeatured: true,
      productIsSale: true,
      isCarted: true
    }
  ]

  cartItems = this.products.filter(product => product.isCarted);
  featuredProducts = this.products.filter(product => product.isFeatured);

  constructor() { }
}
