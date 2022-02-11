import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RecipeSummary } from './models';
// const URL_API_RECIPES = '/api/recipes';
const URL_API_RECIPES = 'http://localhost:8080/api/recipes';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {

  }

  getAllRecipes(): Promise<RecipeSummary[]> {
    return lastValueFrom(
      this.http.get<RecipeSummary[]>(URL_API_RECIPES)
    );

  }

}
