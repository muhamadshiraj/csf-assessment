export interface RecipeSummary {
  recipeId: string
  title: string
}

export interface Recipe extends RecipeSummary {
  image: string
  instructions: string
  ingredients: string[]
}
