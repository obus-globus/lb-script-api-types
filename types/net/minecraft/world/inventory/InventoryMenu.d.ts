import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractCraftingMenu } from '../../../../net/minecraft/world/inventory/AbstractCraftingMenu.d.ts'
import type { RecipeBookType } from '../../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class InventoryMenu extends AbstractCraftingMenu {
    static ARMOR_SLOT_COUNT: number;
    static ARMOR_SLOT_END: number;
    static ARMOR_SLOT_START: number;
    static CARRIED_SLOT_SIZE: number;
    static CONTAINER_ID: number;
    static CRAFT_SLOT_COUNT: number;
    static CRAFT_SLOT_END: number;
    static CRAFT_SLOT_START: number;
    static EMPTY_ARMOR_SLOT_BOOTS: Identifier;
    static EMPTY_ARMOR_SLOT_CHESTPLATE: Identifier;
    static EMPTY_ARMOR_SLOT_HELMET: Identifier;
    static EMPTY_ARMOR_SLOT_LEGGINGS: Identifier;
    static EMPTY_ARMOR_SLOT_SHIELD: Identifier;
    static INV_SLOT_END: number;
    static INV_SLOT_START: number;
    static QUICKCRAFT_HEADER_CONTINUE: number;
    static QUICKCRAFT_HEADER_END: number;
    static QUICKCRAFT_HEADER_START: number;
    static QUICKCRAFT_TYPE_CHARITABLE: number;
    static QUICKCRAFT_TYPE_CLONE: number;
    static QUICKCRAFT_TYPE_GREEDY: number;
    static RESULT_SLOT: number;
    static SHIELD_SLOT: number;
    static SLOTS_PER_ROW: number;
    static SLOT_CLICKED_OUTSIDE: number;
    static SLOT_SIZE: number;
    static USE_ROW_SLOT_END: number;
    static USE_ROW_SLOT_START: number;
    static canItemQuickReplace(paramslot: Slot, paramitemStack: ItemStack, paramignoreSize: boolean): boolean;
    static getQuickCraftPlaceCount(paramquickCraftSlotsSize: number, paramquickCraftingType: number, paramitemStack: ItemStack): number;
    static getQuickcraftHeader(parammask: number): number;
    static getQuickcraftMask(paramheader: number, paramtype: number): number;
    static getQuickcraftType(parammask: number): number;
    static getRedstoneSignalFromBlockEntity(paramblockEntity: BlockEntity): number;
    static getRedstoneSignalFromContainer(paramcontainer: ItemStack[]): number;
    static isHotbarSlot(paramslot: number): boolean;
    static isValidQuickcraftType(paramtype: number, paramplayer: Player): boolean;
    constructor(inventory: (Object | null)[], active: boolean, owner: Player)
    active: boolean;
    // private owner: Player;
    canTakeItemForPickAll(carried: ItemStack, target: Slot): boolean;
    getCraftSlots(): (Object | null)[];
    getInputGridSlots(): Slot[];
    getRecipeBookType(): RecipeBookType;
    getResultSlot(): Slot;
    owner(): Player;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removed(player: Player): void;
    slotsChanged(container: ItemStack[]): void;
    stillValid(player: Player): boolean;
}