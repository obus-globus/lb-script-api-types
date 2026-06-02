import type { RecipeData$Recipe } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/data/RecipeData$Recipe.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeData extends Object {
    static recipes: { [key: string]: RecipeData$Recipe };
    static init(): void;
    constructor()
}