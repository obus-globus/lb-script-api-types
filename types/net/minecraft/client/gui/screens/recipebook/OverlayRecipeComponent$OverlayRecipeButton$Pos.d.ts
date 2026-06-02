import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class OverlayRecipeComponent$OverlayRecipeButton$Pos extends Record {
    // private ingredients: ItemStack[];
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    ingredients(): ItemStack[];
    selectIngredient(currentIndex: number): ItemStack;
    toString(): string;
    x(): number;
    y(): number;
}