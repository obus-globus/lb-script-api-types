import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BrewingStandMenu$PotionSlot extends Slot {
    static mayPlaceItem(paramitemStack: ItemStack): boolean;
    constructor(container: ItemStack[], slot: number, x: number, y: number)
    getMaxStackSize(): number;
    getNoItemIcon(): Identifier;
    mayPlace(itemStack: ItemStack): boolean;
    onTake(player: Player, carried: ItemStack): void;
}