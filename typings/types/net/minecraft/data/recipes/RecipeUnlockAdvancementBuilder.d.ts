import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class RecipeUnlockAdvancementBuilder extends Object {
    constructor()
    // private criteria: { [key: string]: Criterion<any> };
    build(output: RecipeOutput, id: ResourceKey<Recipe<any>>, category: RecipeCategory): AdvancementHolder;
    unlockedBy(name: string, criterion: Criterion<any>): void;
}