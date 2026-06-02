import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRecipeAccess } from '../../../../../net/fabricmc/fabric/api/recipe/v1/FabricRecipeAccess.d.ts'
import type { SynchronizedRecipes } from '../../../../../net/fabricmc/fabric/api/recipe/v1/sync/SynchronizedRecipes.d.ts'
import type { RecipeAccessMixin } from '../../../../../net/fabricmc/fabric/mixin/recipe/RecipeAccessMixin.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RecipePropertySet } from '../../../../../net/minecraft/world/item/crafting/RecipePropertySet.d.ts'
import type { SelectableRecipe$SingleInputSet } from '../../../../../net/minecraft/world/item/crafting/SelectableRecipe$SingleInputSet.d.ts'
import type { StonecutterRecipe } from '../../../../../net/minecraft/world/item/crafting/StonecutterRecipe.d.ts'
export interface RecipeAccess extends Object, FabricRecipeAccess, RecipeAccessMixin{
    getSynchronizedRecipes(): SynchronizedRecipes;
    propertySet(id: ResourceKey<RecipePropertySet>): RecipePropertySet;
    stonecutterRecipes(): SelectableRecipe$SingleInputSet<StonecutterRecipe>;
}