import { Component, OnInit } from '@angular/core';
import { RecipeSummary } from 'src/app/models';
import { RecipeService } from 'src/app/recipe.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeSummary[] = []

  constructor(private recipeSvc: RecipeService) { }

  ngOnInit(): void {

    this.recipeSvc.getAllRecipes().then(r => (this.recipes = r));

  }


}
