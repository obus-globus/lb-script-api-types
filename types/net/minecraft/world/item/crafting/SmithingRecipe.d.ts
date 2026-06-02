import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { SmithingRecipeInput } from '../../../../../net/minecraft/world/item/crafting/SmithingRecipeInput.d.ts'
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export interface SmithingRecipe extends Object, Recipe<SmithingRecipeInput>{
    additionIngredient(): Optional<Ingredient>;
    baseIngredient(): Ingredient;
    display(): RecipeDisplay[];
    getSerializer(): RecipeSerializer<SmithingRecipe>;
    getType(): RecipeType<SmithingRecipe>;
    isSpecial(): boolean;
    matches(input: SmithingRecipeInput, level: Level): boolean;
    recipeBookCategory(): RecipeBookCategory;
    templateIngredient(): Optional<Ingredient>;
}