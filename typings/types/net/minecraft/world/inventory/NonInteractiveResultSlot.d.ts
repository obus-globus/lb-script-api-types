import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class NonInteractiveResultSlot extends Slot {
    constructor(container: ItemStack[], id: number, x: number, y: number)
    allowModification(player: Player): boolean;
    isFake(): boolean;
    isHighlightable(): boolean;
    mayPickup(player: Player): boolean;
    mayPlace(itemStack: ItemStack): boolean;
    onQuickCraft(picked: ItemStack, count: number): void;
    onQuickCraft(picked: ItemStack, original: ItemStack): void;
    onTake(player: Player, carried: ItemStack): void;
    remove(amount: number): ItemStack;
    safeInsert(stack: ItemStack): ItemStack;
    safeInsert(inputStack: ItemStack, inputAmount: number): ItemStack;
    safeTake(amount: number, maxAmount: number, player: Player): ItemStack;
    tryRemove(amount: number, maxAmount: number, player: Player): Optional<ItemStack>;
}