import { Component } from '@angular/core';

import { Product } from './models/product.model';

interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hola a esta primera clase as';
  name = 'nicolas';

  rockbands: string[] = ['nirvana', 'los prisioneros'];

  users: User[] = [
    {
      name: 'Nicolas',
      age: 26,
      isSingle: false,
      avatar: 'assets/images/img1.jpg',
    },
    {
      name: 'Julian',
      age: 30,
      isSingle: true,
      avatar: 'assets/images/img2.jpg',
    }
  ];
  rockBandName = '';

  products: Product[] = [
    {
      title: 'Producto 1',
      price: 200,
      text: 'supe desatyno',
      image: 'assets/images/img1.jpg',
    },
    {
      title: 'Producto 2',
      price: 200,
      text: 'supe desatyno',
      image: 'assets/images/img2.jpg',
    },
    {
      title: 'Producto 3',
      price: 200,
      text: 'supe desatyno',
      image: 'assets/images/img3.jpg',
    },
  ];


  changeTitle() {
    this.title = 'nuevo titulo';
  }

  addRockBand() {
    this.rockbands.push(this.rockBandName);
    this.rockBandName = '';
  }

  empty() {
    this.rockbands = [];
  }

  deleteItem(index: number) {
    this.rockbands.splice(index, 1);
  }

  updateItem(index: number) {
    this.rockbands[index] = 'se cambio';
  }

}
