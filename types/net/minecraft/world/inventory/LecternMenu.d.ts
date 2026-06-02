import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerData } from '../../../../net/minecraft/world/inventory/ContainerData.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class LecternMenu extends AbstractContainerMenu {
    static BUTTON_NEXT_PAGE: number;
    static BUTTON_PAGE_JUMP_RANGE_START: number;
    static BUTTON_PREV_PAGE: number;
    static BUTTON_TAKE_BOOK: number;
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
    constructor(containerId: number)
    constructor(containerId: number, lectern: ItemStack[], lecternData: ContainerData)
    // private lectern: ItemStack[];
    // private lecternData: ContainerData;
    clickMenuButton(player: Player, buttonId: number): boolean;
    getBook(): ItemStack;
    getPage(): number;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    setData(id: number, value: number): void;
    stillValid(player: Player): boolean;
}