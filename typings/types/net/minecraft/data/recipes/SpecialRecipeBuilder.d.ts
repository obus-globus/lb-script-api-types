import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class SpecialRecipeBuilder extends Object {
    static special(paramfactory: () => Recipe<any>): SpecialRecipeBuilder;
    constructor(factory: () => Recipe<any>)
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private factory: () => Recipe<any>;
    save(output: RecipeOutput, name: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<any>>): void;
    unlockedBy(name: string, criterion: Criterion<any>): SpecialRecipeBuilder;
}