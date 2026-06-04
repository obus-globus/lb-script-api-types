import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StackedItemContents } from '../../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingInput$Positioned } from '../../../../../net/minecraft/world/item/crafting/CraftingInput$Positioned.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
export class CraftingInput extends Object implements RecipeInput {
    static EMPTY: CraftingInput;
    static of(paramwidth: number, paramheight: number, paramitems: ItemStack[]): CraftingInput;
    static ofPositioned(paramwidth: number, paramheight: number, paramitems: ItemStack[]): CraftingInput$Positioned;
    private constructor(width: number, height: number, items: ItemStack[])
    // private height: number;
    // private ingredientCount: number;
    // private items: ItemStack[];
    // private stackedContents: StackedItemContents;
    // private width: number;
    equals(obj: Object | null): boolean;
    getItem(index: number): ItemStack;
    getItem(x: number, y: number): ItemStack;
    hashCode(): number;
    height(): number;
    ingredientCount(): number;
    isEmpty(): boolean;
    items(): ItemStack[];
    size(): number;
    stackedContents(): StackedItemContents;
    width(): number;
}