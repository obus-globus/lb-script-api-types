import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export interface RecipeBuilder extends Object{
    defaultId(): ResourceKey<Recipe<Object>>;
    group(group: string): RecipeBuilder;
    save(output: RecipeOutput): void;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput, location: ResourceKey<Recipe<Object>>): void;
    unlockedBy(name: string, criterion: Criterion<Object>): RecipeBuilder;
}