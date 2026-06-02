import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRecipeOutput } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/recipe/FabricRecipeOutput.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface RecipeOutputMixin extends Object, FabricRecipeOutput{
    getRecipeIdentifier(arg0: Identifier): Identifier;
}