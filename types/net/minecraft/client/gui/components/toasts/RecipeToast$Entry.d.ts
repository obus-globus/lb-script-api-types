import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RecipeToast$Entry extends Record {
    private constructor(categoryItem: ItemStack, unlockedItem: ItemStack)
    // private categoryItem: ItemStack;
    // private unlockedItem: ItemStack;
    categoryItem(): ItemStack;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    unlockedItem(): ItemStack;
}