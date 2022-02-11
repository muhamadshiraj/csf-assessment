import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  id!: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipeSvc: RecipeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log('>>>id:', this.id);
    this.getRecipe(this.id)
  }

  getRecipe(id:string){
    this.recipeSvc.getRecipe(id)
    .then(r=> {
      this.recipe = r
      console.log('>>>promise:', this.recipe);
    })

  }

  goHome(){
    this.router.navigate(['/'])
  }
}
