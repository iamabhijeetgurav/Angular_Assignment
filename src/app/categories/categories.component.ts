import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  data = {
    "Electronics": [
      { name: "Laptops", quantity: 93 },
      { name: "iPhone", quantity: 233 },
      { name: "Microsoft", quantity: 183 },
      { name: "Monitors", quantity: 343 }
    ], "Restaurants": [
      { name: "Cafe", quantity: 393 },
      { name: "Fast Food", quantity: 23 },
      { name: "Restaurants13", quantity: 13 },
      { name: "Food Truck", quantity: 43 }
    ], "Real Estate": [
      { name: "Farms", quantity: 93 },
      { name: "Gym", quantity: 23 },
      { name: "Hospitals", quantity: 83 },
      { name: "Parolurs", quantity: 33 }
    ], "Shoppings": [
      { name: "Mens Wears", quantity: 53 },
      { name: "Accessories", quantity: 212 },
      { name: "Kids Wears", quantity: 133 },
      { name: "It & Software", quantity: 143 }
    ], "Jobs": [
      { name: "It Jobs", quantity: 93 },
      { name: "Cleaning & Washing", quantity: 233 },
      { name: "Management", quantity: 183 },
      { name: "Voluntary Works", quantity: 343 }
    ], "Vehicles": [
      { name: "Bus", quantity: 193 },
      { name: "Cars", quantity: 23 },
      { name: "Motobike", quantity: 33 },
      { name: "Rent a car", quantity: 73 }
    ], "Pets": [
      { name: "Cats", quantity: 65 },
      { name: "Dogs", quantity: 23 },
      { name: "Birds", quantity: 113 },
      { name: "Others", quantity: 43 }
    ], "Services": [
      { name: "Cleaning", quantity: 93 },
      { name: "Car Washing", quantity: 233 },
      { name: "Clothing", quantity: 183 },
      { name: "Business", quantity: 343 }
    ]
  };
  getCategoryIcon(categoryName: string): string {
    // Define your mapping logic here
    switch (categoryName) {
      case 'Electronics':
        return 'fa fa-laptop icon-bg-1';
      case 'Restaurants':
        return 'fa fa-apple icon-bg-2';
      case 'Real Estate':
        return 'fa fa-home icon-bg-3';
      case 'Shoppings':
        return 'fa fa-shopping-basket icon-bg-4';
      case 'Jobs':
        return 'fa fa-briefcase icon-bg-5';
      case 'Vehicles':
        return 'fa fa-car icon-bg-6';
      case 'Pets':
        return 'fa fa-paw icon-bg-7';
      case 'Services':
        return 'fa fa-laptop icon-bg-8';
      default:
        return 'fa-question-circle'; // Default icon if category is unknown
    };
  }
  // categoryIcons = {
  //   "Electronics": "fa fa-laptop icon-bg-1",
  //   "Restaurants": "fa fa-apple icon-bg-2",
  //   "Real Estate": "fa fa-home icon-bg-3",
  //   "Shoppings": "fa fa-shopping-basket icon-bg-4",
  //   "Jobs": "fa fa-briefcase icon-bg-5",
  //   "Vehicles": "fa fa-car icon-bg-6",
  //   "Pets": "fa fa-paw icon-bg-7",
  //   "Services": "fa fa-laptop icon-bg-8"
  // };
}
