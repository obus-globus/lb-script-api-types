import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CreativeModeInventoryScreen$CustomCreativeSlot extends Slot {
    constructor(container: ItemStack[], slot: number, x: number, y: number)
    mayPickup(player: Player): boolean;
}