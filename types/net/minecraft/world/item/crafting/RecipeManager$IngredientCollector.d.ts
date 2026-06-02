import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeManager$IngredientExtractor } from '../../../../../net/minecraft/world/item/crafting/RecipeManager$IngredientExtractor.d.ts'
import type { RecipePropertySet } from '../../../../../net/minecraft/world/item/crafting/RecipePropertySet.d.ts'
export class RecipeManager$IngredientCollector extends Object implements Consumer<Recipe<Object>> {
    constructor(key: ResourceKey<RecipePropertySet>, extractor: (param0: Recipe<Object>) => java.util.Optional<net.minecraft.world.item.crafting.Ingredient>)
    // private extractor: (param0: Recipe<Object>) => java.util.Optional<net.minecraft.world.item.crafting.Ingredient>;
    // private ingredients: Ingredient[];
    // private key: ResourceKey<RecipePropertySet>;
    accept(recipe: Recipe<Object>): void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    asPropertySet(enabledFeatures: FeatureFlagSet): RecipePropertySet;
}