import { Component } from '@angular/core';

@Component({
  selector: 'app-advertises',
  templateUrl: './advertises.component.html',
  styleUrls: ['./advertises.component.css']
})
export class AdvertisesComponent {
  data = [
    {
      name: '11inch Macbook Air',
      category: 'Electronics',
      date: '26th December',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!',
      rating: 4
    },
    {
      name: 'Full Study Table Combo',
      category: 'Furnitures',
      date: '26th December',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!',
      rating: 4
    }, {
      name: '11inch Macbook Air',
      category: 'Electronics',
      date: '26th December',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!',
      rating: 4
    }
  ];
  imageUrls = [
    '../../assets/images/products/products-1.jpg',
    '../../assets/images/products/products-2.jpg',
    '../../assets/images/products/products-3.jpg'
  ]
}
