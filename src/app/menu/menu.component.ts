import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  myNumber: number;
  dishes: Dish[];
  selectedDish: Dish;
  DishDetailNumber : number;

  constructor(private dishService: DishService) {

   }

  ngOnInit() {
    this.myNumber = 1;
    this.DishDetailNumber = 1;

    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {        //OnSelect take a parameter of type Dish
    this.selectedDish = dish;   //Set the export this.selectedDish = the Dish provided 
  }

  doSomething() {
    this.myNumber++;
    this.DishDetailNumber = this.myNumber;
  }
}
