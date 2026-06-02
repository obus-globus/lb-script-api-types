import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FurnaceResultSlot extends Slot {
    constructor(player: Player, container: ItemStack[], slot: number, x: number, y: number)
    // private player: Player;
    // private removeCount: number;
    checkTakeAchievements(carried: ItemStack): void;
    mayPlace(itemStack: ItemStack): boolean;
    onQuickCraft(picked: ItemStack, count: number): void;
    onTake(player: Player, carried: ItemStack): void;
    remove(amount: number): ItemStack;
}