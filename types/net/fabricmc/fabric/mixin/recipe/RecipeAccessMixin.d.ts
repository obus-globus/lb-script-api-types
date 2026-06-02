import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRecipeAccess } from '../../../../../net/fabricmc/fabric/api/recipe/v1/FabricRecipeAccess.d.ts'
import type { SynchronizedRecipes } from '../../../../../net/fabricmc/fabric/api/recipe/v1/sync/SynchronizedRecipes.d.ts'
export interface RecipeAccessMixin extends Object, FabricRecipeAccess{
    getSynchronizedRecipes(): SynchronizedRecipes;
}