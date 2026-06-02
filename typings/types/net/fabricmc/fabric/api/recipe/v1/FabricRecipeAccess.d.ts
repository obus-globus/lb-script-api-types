import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SynchronizedRecipes } from '../../../../../../net/fabricmc/fabric/api/recipe/v1/sync/SynchronizedRecipes.d.ts'
export interface FabricRecipeAccess extends Object{
    getSynchronizedRecipes(): SynchronizedRecipes;
}