import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Merchant } from '../../../../net/minecraft/world/item/trading/Merchant.d.ts'
export class MerchantResultSlot extends Slot {
    constructor(player: Player, merchant: Merchant, slots: (Object | null)[], id: number, x: number, y: number)
    // private merchant: Merchant;
    // private player: Player;
    // private removeCount: number;
    // private slots: (Object | null)[];
    checkTakeAchievements(carried: ItemStack): void;
    mayPlace(itemStack: ItemStack): boolean;
    onQuickCraft(picked: ItemStack, count: number): void;
    onQuickCraft(picked: ItemStack, original: ItemStack): void;
    onTake(player: Player, carried: ItemStack): void;
    remove(amount: number): ItemStack;
}