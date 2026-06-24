import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Slot extends Object {
    constructor(container: ItemStack[], slot: number, x: number, y: number)
    container: ItemStack[];
    index: number;
    // private slot: number;
    x: number;
    y: number;
    allowModification(player: Player): boolean;
    checkTakeAchievements(carried: ItemStack): void;
    getContainerSlot(): number;
    getItem(): ItemStack;
    getMaxStackSize(): number;
    getMaxStackSize(itemStack: ItemStack): number;
    getNoItemIcon(): Identifier;
    hasItem(): boolean;
    isActive(): boolean;
    isFake(): boolean;
    isHighlightable(): boolean;
    mayPickup(player: Player): boolean;
    mayPlace(itemStack: ItemStack): boolean;
    onQuickCraft(picked: ItemStack, count: number): void;
    onQuickCraft(picked: ItemStack, original: ItemStack): void;
    onSwapCraft(count: number): void;
    onTake(player: Player, carried: ItemStack): void;
    remove(amount: number): ItemStack;
    safeClone(player: Player): ItemStack;
    safeInsert(stack: ItemStack): ItemStack;
    safeInsert(inputStack: ItemStack, inputAmount: number): ItemStack;
    safeTake(amount: number, maxAmount: number, player: Player): ItemStack;
    set(itemStack: ItemStack): void;
    setByPlayer(itemStack: ItemStack): void;
    setByPlayer(itemStack: ItemStack, previous: ItemStack): void;
    setChanged(): void;
    tryRemove(amount: number, maxAmount: number, player: Player): Optional<ItemStack>;
}