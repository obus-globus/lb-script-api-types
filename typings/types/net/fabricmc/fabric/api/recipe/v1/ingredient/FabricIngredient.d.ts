import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredient } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredient.d.ts'
export interface FabricIngredient extends Object{
    getCustomIngredient(): CustomIngredient;
    requiresTesting(): boolean;
}