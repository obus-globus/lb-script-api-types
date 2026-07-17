import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { RecipeData$Recipe } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/data/RecipeData$Recipe.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeData extends Object {
    static recipes: JavaMap<string, RecipeData$Recipe>;
    static init(): void;
    constructor()
}