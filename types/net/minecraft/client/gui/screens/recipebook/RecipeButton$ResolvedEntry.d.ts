import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class RecipeButton$ResolvedEntry extends Record {
    private constructor(id: RecipeDisplayId, displayItems: ItemStack[])
    // private displayItems: ItemStack[];
    // private id: RecipeDisplayId;
    displayItems(): ItemStack[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): RecipeDisplayId;
    selectItem(index: number): ItemStack;
    toString(): string;
}