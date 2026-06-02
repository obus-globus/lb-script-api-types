import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SynchronizedRecipes } from '../../../../../../../../net/fabricmc/fabric/api/recipe/v1/sync/SynchronizedRecipes.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
export interface ClientRecipeSynchronizedEvent extends Object{
    onRecipesSynchronized(arg0: Minecraft, arg1: SynchronizedRecipes): void;
}