import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerLevelAccess } from '../../../../net/minecraft/world/inventory/ContainerLevelAccess.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class CartographyTableMenu extends AbstractContainerMenu {
    static ADDITIONAL_SLOT: number;
    static CARRIED_SLOT_SIZE: number;
    static MAP_SLOT: number;
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
    container: ItemStack[];
    // private lastSoundTime: number;
    // private resultContainer: (Object | null)[];
    canTakeItemForPickAll(carried: ItemStack, target: Slot): boolean;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removed(player: Player): void;
    // private setupResultSlot(mapStack: ItemStack, additionalStack: ItemStack, resultStack: ItemStack): void;
    slotsChanged(container: ItemStack[]): void;
    stillValid(player: Player): boolean;
}