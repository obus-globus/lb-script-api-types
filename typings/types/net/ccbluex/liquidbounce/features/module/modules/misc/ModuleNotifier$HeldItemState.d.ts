import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleNotifier$HeldItemState extends Object {
    constructor(mainHand: ItemStack | null, offHand: ItemStack | null)
    /*not mapped: */ isEmpty(): boolean;
    readonly mainHand: ItemStack | null;
    readonly offHand: ItemStack | null;
    component1(): ItemStack | null;
    component2(): ItemStack | null;
    copy(mainHand: ItemStack | null, offHand: ItemStack | null): ModuleNotifier$HeldItemState;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}