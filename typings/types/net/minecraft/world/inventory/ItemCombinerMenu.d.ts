import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerLevelAccess } from '../../../../net/minecraft/world/inventory/ContainerLevelAccess.d.ts'
import type { ItemCombinerMenuSlotDefinition } from '../../../../net/minecraft/world/inventory/ItemCombinerMenuSlotDefinition.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export abstract class ItemCombinerMenu extends AbstractContainerMenu {
    static CARRIED_SLOT_SIZE: number;
    static QUICKCRAFT_HEADER_CONTINUE: number;
    static QUICKCRAFT_HEADER_END: number;
    static QUICKCRAFT_HEADER_START: number;
    static QUICKCRAFT_TYPE_CHARITABLE: number;
    static QUICKCRAFT_TYPE_CLONE: number;
    static QUICKCRAFT_TYPE_GREEDY: number;
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
    constructor(menuType: MenuType<any>, containerId: number, inventory: (Object | null)[], access: ContainerLevelAccess, itemInputSlots: ItemCombinerMenuSlotDefinition)
    // private access: ContainerLevelAccess;
    // private inputSlots: ItemStack[];
    // private player: Player;
    // private resultSlotIndex: number;
    // private resultSlots: (Object | null)[];
    canMoveIntoInputSlots(stack: ItemStack): boolean;
    // private createContainer(size: number): (Object | null)[];
    // private createInputSlots(itemInputSlots: ItemCombinerMenuSlotDefinition): void;
    createResult(): void;
    // private createResultSlot(itemInputSlots: ItemCombinerMenuSlotDefinition): void;
    // private getInventorySlotEnd(): number;
    // private getInventorySlotStart(): number;
    getResultSlot(): number;
    // private getUseRowEnd(): number;
    // private getUseRowStart(): number;
    isValidBlock(state: BlockState): boolean;
    mayPickup(player: Player, hasItem: boolean): boolean;
    onTake(player: Player, carried: ItemStack): void;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removed(player: Player): void;
    slotsChanged(container: ItemStack[]): void;
    stillValid(player: Player): boolean;
}