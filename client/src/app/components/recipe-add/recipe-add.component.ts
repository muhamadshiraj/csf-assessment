import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  form!:FormGroup

  constructor(private fb: FormBuilder,
              private recipeSvc: RecipeService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({
      title: this.fb.control('', Validators.required),
      ingredients: this.IngredientsList(),
      instruction: this.fb.control('', Validators.required),
      image: this.fb.control('', Validators.required)
    })
  }

  addRecipe() {
    console.log("Hello")

  }

  Ingredient(ingredient: string) {
    return this.fb.group({
      name: this.fb.control(ingredient || '', Validators.required)
    })
  }

  IngredientsList(ingredients: string[] = []) {
    const list = this.fb.array([], Validators.required);
    for (let i of ingredients) {
      list.push(this.Ingredient(i));
    }
    return list;
  }

  addIngredient() {
    (<FormArray>this.form.get('ingredients'))
    .push(new FormGroup({
      'name': new FormControl('', Validators.required)
    }))
  }

  get controls() {
    return (<FormArray> this.form.get('ingredients')).controls;
  }

  deleteIngredient(index: number) {
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }
}
