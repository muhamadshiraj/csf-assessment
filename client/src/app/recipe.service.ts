import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe, RecipeSummary } from './models';
// const URL_API_RECIPES = '/api/recipes';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {

  }

  getAllRecipes(): Promise<RecipeSummary[]> {
    return lastValueFrom(
      this.http.get<RecipeSummary[]>('/api/recipes')
      // this.http.get<RecipeSummary[]>('http://localhost:8080/api/recipes')
    );

  }

  getRecipe(id: string): Promise<Recipe> {
    return lastValueFrom(
      this.http.get<Recipe>('/api/recipe/'.concat(id))
      // this.http.get<Recipe>('http://localhost:8080/api/recipe/'.concat(id))
    )
  }
}
