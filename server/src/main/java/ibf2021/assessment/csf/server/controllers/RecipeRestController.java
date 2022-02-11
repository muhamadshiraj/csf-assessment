package ibf2021.assessment.csf.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;

/* Write your request hander in this file */

@RestController
@RequestMapping(path = "/api/recipe", produces = MediaType.APPLICATION_JSON_VALUE)
public class RecipeRestController {

    @Autowired
    private RecipeService recipeSvc;

    @GetMapping(path = "{recipeId}")
    public ResponseEntity<String> getRecipe(@PathVariable String recipeId) {
        Optional<Recipe> recipeDetails = recipeSvc.getRecipeById(recipeId);
        System.out.println("HITPOST!!!!!");
        if (recipeDetails.isPresent()) {

            Recipe recipe = recipeDetails.get();
            JsonArrayBuilder ingredientsBuilder = Json.createArrayBuilder();
            for (String ingredient : recipe.getIngredients()) {
                ingredientsBuilder.add(ingredient);
            }
            JsonArray ingredients = ingredientsBuilder.build();

            JsonObject jo = Json.createObjectBuilder()
                    .add("title", recipe.getTitle())
                    .add("id", recipe.getId())
                    .add("image", recipe.getImage())
                    .add("ingredients", ingredients.toString())
                    .add("instruction", recipe.getInstruction())
                    .build();
            System.out.println("SUCCESS!!!!!");
            return ResponseEntity.ok(jo.toString());
        } else {

            JsonObject jo = Json.createObjectBuilder()
                    .add("payload", "ID invalid")
                    .build();
                    System.out.println("FAILURE!!!!!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(jo.toString());
        }

    }
}