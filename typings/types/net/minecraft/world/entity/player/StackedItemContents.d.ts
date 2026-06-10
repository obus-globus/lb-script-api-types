import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { StackedContents } from '../../../../../net/minecraft/world/entity/player/StackedContents.d.ts'
import type { StackedContents$IngredientInfo } from '../../../../../net/minecraft/world/entity/player/StackedContents$IngredientInfo.d.ts'
import type { StackedContents$Output } from '../../../../../net/minecraft/world/entity/player/StackedContents$Output.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class StackedItemContents extends Object {
    constructor()
    // private raw: StackedContents<Holder<Item>>;
    accountSimpleStack(itemStack: ItemStack): void;
    accountStack(itemStack: ItemStack): void;
    accountStack(itemStack: ItemStack, maxCount: number): void;
    // private canCraft(contents: (param0: Holder<Item>) => boolean[], amount: number, output: (param0: Holder<Item>) => void): boolean;
    canCraft(contents: (param0: Holder<Item>) => boolean[], output: (param0: Holder<Item>) => void): boolean;
    canCraft(recipe: Recipe<Object>, amount: number, output: (param0: Holder<Item>) => void): boolean;
    canCraft(recipe: Recipe<Object>, output: (param0: Holder<Item>) => void): boolean;
    clear(): void;
    getBiggestCraftableStack(recipe: Recipe<Object>, maxSize: number, output: (param0: Holder<Item>) => void): number;
    getBiggestCraftableStack(recipe: Recipe<Object>, output: (param0: Holder<Item>) => void): number;
}