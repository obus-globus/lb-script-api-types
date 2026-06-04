import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { FabricPotionBrewingBuilder } from '../../../../../net/fabricmc/fabric/api/registry/FabricPotionBrewingBuilder.d.ts'
import type { FabricPotionBrewingBuilder$BuildCallback } from '../../../../../net/fabricmc/fabric/api/registry/FabricPotionBrewingBuilder$BuildCallback.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Potion } from '../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { PotionBrewing } from '../../../../../net/minecraft/world/item/alchemy/PotionBrewing.d.ts'
import type { PotionBrewing$Mix } from '../../../../../net/minecraft/world/item/alchemy/PotionBrewing$Mix.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class PotionBrewing$Builder extends Object implements FabricPotionBrewingBuilder {
    static BUILD: Event<(param0: PotionBrewing$Builder) => void>;
    constructor(enabledFeatures: FeatureFlagSet)
    // private containerMixes: PotionBrewing$Mix<Item>[];
    // private containers: Ingredient[];
    readonly enabledFeatures: FeatureFlagSet;
    // private potionMixes: PotionBrewing$Mix<Potion>[];
    addContainer(item: Item): void;
    addContainerRecipe(from: Item, ingredient: Item, to: Item): void;
    addMix(from: Holder<Potion>, ingredient: Item, to: Holder<Potion>): void;
    addStartMix(ingredient: Item, potion: Holder<Potion>): void;
    build(): PotionBrewing;
    getEnabledFeatures(): FeatureFlagSet;
    registerItemRecipe(arg0: Item, arg1: Ingredient, arg2: Item): void;
    registerPotionRecipe(arg0: Holder<Potion>, arg1: Ingredient, arg2: Holder<Potion>): void;
    registerPotionRecipe(arg0: Holder<Object>, arg1: Ingredient, arg2: Holder<Object>): void;
    registerRecipes(arg0: Ingredient, arg1: Holder<Potion>): void;
    registerRecipes(arg0: Ingredient, arg1: Holder<Object>): void;
}