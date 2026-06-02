import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class GhostSlots$GhostSlot extends Record {
    // private isResultSlot: boolean;
    // private items: ItemStack[];
    equals(o: Object | null): boolean;
    getItem(itemIndex: number): ItemStack;
    hashCode(): number;
    isResultSlot(): boolean;
    items(): ItemStack[];
    toString(): string;
}