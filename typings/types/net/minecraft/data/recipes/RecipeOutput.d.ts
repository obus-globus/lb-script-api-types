import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricRecipeOutput } from '../../../../net/fabricmc/fabric/api/datagen/v1/recipe/FabricRecipeOutput.d.ts'
import type { RecipeOutputMixin } from '../../../../net/fabricmc/fabric/mixin/datagen/recipe/RecipeOutputMixin.d.ts'
import type { Advancement$Builder } from '../../../../net/minecraft/advancements/Advancement$Builder.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export interface RecipeOutput extends Object, FabricRecipeOutput, RecipeOutputMixin{
    accept(id: ResourceKey<Recipe<any>>, recipe: Recipe<any>, advancement: AdvancementHolder): void;
    advancement(): Advancement$Builder;
    getRecipeIdentifier(arg0: Identifier): Identifier;
    includeRootAdvancement(): void;
}