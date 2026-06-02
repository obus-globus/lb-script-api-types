import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Potion } from '../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { PotionBrewing$Builder } from '../../../../../net/minecraft/world/item/alchemy/PotionBrewing$Builder.d.ts'
import type { PotionBrewing$Mix } from '../../../../../net/minecraft/world/item/alchemy/PotionBrewing$Mix.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class PotionBrewing extends Object {
    static BREWING_TIME_SECONDS: number;
    static EMPTY: PotionBrewing;
    static addVanillaMixes(parambuilder: PotionBrewing$Builder): void;
    static bootstrap(paramenabledFeatures: FeatureFlagSet): PotionBrewing;
    private constructor(containers: Ingredient[], potionMixes: PotionBrewing$Mix<Potion>[], containerMixes: PotionBrewing$Mix<Item>[])
    // private containerMixes: PotionBrewing$Mix<Item>[];
    // private containers: Ingredient[];
    // private potionMixes: PotionBrewing$Mix<Potion>[];
    hasContainerMix(source: ItemStack, ingredient: ItemStack): boolean;
    hasMix(source: ItemStack, ingredient: ItemStack): boolean;
    hasPotionMix(source: ItemStack, ingredient: ItemStack): boolean;
    isBrewablePotion(potion: Holder<Potion>): boolean;
    // private isContainer(input: ItemStack): boolean;
    isContainerIngredient(ingredient: ItemStack): boolean;
    isIngredient(ingredient: ItemStack): boolean;
    isPotionIngredient(ingredient: ItemStack): boolean;
    mix(ingredient: ItemStack, source: ItemStack): ItemStack;
}