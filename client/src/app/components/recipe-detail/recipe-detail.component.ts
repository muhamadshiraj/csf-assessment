import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoadHome(){
    this.router.navigate(['/'])
  }
}
