import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Potion } from '../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export interface FabricPotionBrewingBuilder extends Object{
    getEnabledFeatures(): FeatureFlagSet;
    registerItemRecipe(arg0: Item, arg1: Ingredient, arg2: Item): void;
    registerPotionRecipe(arg0: Holder<Potion>, arg1: Ingredient, arg2: Holder<Potion>): void;
    registerRecipes(arg0: Ingredient, arg1: Holder<Potion>): void;
}