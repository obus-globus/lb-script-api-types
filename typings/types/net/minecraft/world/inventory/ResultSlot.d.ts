import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingInput } from '../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class ResultSlot extends Slot {
    constructor(player: Player, craftSlots: (Object | null)[], container: ItemStack[], id: number, x: number, y: number)
    // private craftSlots: (Object | null)[];
    // private player: Player;
    // private removeCount: number;
    checkTakeAchievements(carried: ItemStack): void;
    // private getRemainingItems(input: CraftingInput, level: Level): ItemStack[];
    isFake(): boolean;
    mayPlace(itemStack: ItemStack): boolean;
    onQuickCraft(picked: ItemStack, count: number): void;
    onQuickCraft(picked: ItemStack, original: ItemStack): void;
    onSwapCraft(count: number): void;
    onTake(player: Player, carried: ItemStack): void;
    remove(amount: number): ItemStack;
}