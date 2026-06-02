import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BundleContents } from '../../../../../net/minecraft/world/item/component/BundleContents.d.ts'
import type { Fraction } from '../../../../../org/apache/commons/lang3/math/Fraction.d.ts'
export class BundleContents$Mutable extends Object {
    constructor(contents: BundleContents)
    // private items: ItemStack[];
    // private selectedItem: number;
    // private weight: Fraction;
    clearItems(): BundleContents$Mutable;
    // private findStackIndex(itemsToAdd: ItemStack): number;
    // private getMaxAmountToAdd(itemWeight: Fraction): number;
    // private indexIsOutsideAllowedBounds(selectedItem: number): boolean;
    removeOne(): ItemStack;
    toImmutable(): BundleContents;
    toggleSelectedItem(selectedItem: number): void;
    tryInsert(itemsToAdd: ItemStack): number;
    tryTransfer(slot: Slot, player: Player): number;
    weight(): Fraction;
}