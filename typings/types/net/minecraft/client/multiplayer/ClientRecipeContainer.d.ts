import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricRecipeAccess } from '../../../../net/fabricmc/fabric/api/recipe/v1/FabricRecipeAccess.d.ts'
import type { SynchronizedRecipes } from '../../../../net/fabricmc/fabric/api/recipe/v1/sync/SynchronizedRecipes.d.ts'
import type { SynchronizedClientRecipesSetter } from '../../../../net/fabricmc/fabric/impl/recipe/sync/client/SynchronizedClientRecipesSetter.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RecipeAccess } from '../../../../net/minecraft/world/item/crafting/RecipeAccess.d.ts'
import type { RecipePropertySet } from '../../../../net/minecraft/world/item/crafting/RecipePropertySet.d.ts'
import type { SelectableRecipe$SingleInputSet } from '../../../../net/minecraft/world/item/crafting/SelectableRecipe$SingleInputSet.d.ts'
import type { StonecutterRecipe } from '../../../../net/minecraft/world/item/crafting/StonecutterRecipe.d.ts'
export class ClientRecipeContainer extends Object implements FabricRecipeAccess, SynchronizedClientRecipesSetter, RecipeAccess {
    constructor(itemSets: Map<ResourceKey<RecipePropertySet>, RecipePropertySet>, stonecutterRecipes: SelectableRecipe$SingleInputSet<StonecutterRecipe>)
    // private itemSets: Map<ResourceKey<RecipePropertySet>, RecipePropertySet>;
    // private stonecutterRecipes: SelectableRecipe$SingleInputSet<StonecutterRecipe>;
    // private synchronizedClientRecipes: SynchronizedRecipes;
    fabric_setSynchronizedClientRecipes(arg0: SynchronizedRecipes): void;
    getSynchronizedRecipes(): SynchronizedRecipes;
    propertySet(id: ResourceKey<RecipePropertySet>): RecipePropertySet;
    stonecutterRecipes(): SelectableRecipe$SingleInputSet<StonecutterRecipe>;
}