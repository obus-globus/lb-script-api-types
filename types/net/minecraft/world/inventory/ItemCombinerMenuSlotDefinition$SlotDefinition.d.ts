import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemCombinerMenuSlotDefinition$SlotDefinition extends Record {
    // private mayPlace: (param0: ItemStack) => kotlin.Boolean;
    // private slotIndex: number;
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mayPlace(): (param0: ItemStack) => kotlin.Boolean;
    slotIndex(): number;
    toString(): string;
    x(): number;
    y(): number;
}