import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractCraftingMenu } from '../../../../net/minecraft/world/inventory/AbstractCraftingMenu.d.ts'
import type { ContainerLevelAccess } from '../../../../net/minecraft/world/inventory/ContainerLevelAccess.d.ts'
import type { RecipeBookType } from '../../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingRecipe } from '../../../../net/minecraft/world/item/crafting/CraftingRecipe.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class CraftingMenu extends AbstractCraftingMenu {
    static CARRIED_SLOT_SIZE: number;
    static QUICKCRAFT_HEADER_CONTINUE: number;
    static QUICKCRAFT_HEADER_END: number;
    static QUICKCRAFT_HEADER_START: number;
    static QUICKCRAFT_TYPE_CHARITABLE: number;
    static QUICKCRAFT_TYPE_CLONE: number;
    static QUICKCRAFT_TYPE_GREEDY: number;
    static RESULT_SLOT: number;
    static SLOTS_PER_ROW: number;
    static SLOT_CLICKED_OUTSIDE: number;
    static SLOT_SIZE: number;
    static canItemQuickReplace(paramslot: Slot, paramitemStack: ItemStack, paramignoreSize: boolean): boolean;
    static getQuickCraftPlaceCount(paramquickCraftSlotsSize: number, paramquickCraftingType: number, paramitemStack: ItemStack): number;
    static getQuickcraftHeader(parammask: number): number;
    static getQuickcraftMask(paramheader: number, paramtype: number): number;
    static getQuickcraftType(parammask: number): number;
    static getRedstoneSignalFromBlockEntity(paramblockEntity: BlockEntity): number;
    static getRedstoneSignalFromContainer(paramcontainer: ItemStack[]): number;
    static isValidQuickcraftType(paramtype: number, paramplayer: Player): boolean;
    constructor(containerId: number, inventory: (Object | null)[])
    constructor(containerId: number, inventory: (Object | null)[], access: ContainerLevelAccess)
    // private access: ContainerLevelAccess;
    // private placingRecipe: boolean;
    // private player: Player;
    beginPlacingRecipe(): void;
    canTakeItemForPickAll(carried: ItemStack, target: Slot): boolean;
    finishPlacingRecipe(level: ServerLevel, recipe: RecipeHolder<CraftingRecipe>): void;
    getInputGridSlots(): Slot[];
    getRecipeBookType(): RecipeBookType;
    getResultSlot(): Slot;
    owner(): Player;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removed(player: Player): void;
    slotsChanged(container: ItemStack[]): void;
    stillValid(player: Player): boolean;
}