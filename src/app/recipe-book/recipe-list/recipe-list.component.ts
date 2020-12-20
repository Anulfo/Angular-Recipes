import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cast Iron Skillet Pork Chops', 'Delicious Dish', 'https://therecipecritic.com/wp-content/uploads/2019/09/cast-iron-skillet-pork-chops-7.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
