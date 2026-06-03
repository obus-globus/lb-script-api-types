import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CreativeModeInventoryScreen$SlotWrapper extends Slot {
    constructor(target: Slot, index: number, x: number, y: number)
    // private target: Slot;
    getItem(): ItemStack;
    getMaxStackSize(): number;
    getMaxStackSize(itemStack: ItemStack): number;
    getNoItemIcon(): Identifier;
    hasItem(): boolean;
    isActive(): boolean;
    mayPickup(player: Player): boolean;
    mayPlace(itemStack: ItemStack): boolean;
    onTake(player: Player, carried: ItemStack): void;
    remove(amount: number): ItemStack;
    set(itemStack: ItemStack): void;
    setByPlayer(itemStack: ItemStack): void;
    setByPlayer(itemStack: ItemStack, previous: ItemStack): void;
    setChanged(): void;
}