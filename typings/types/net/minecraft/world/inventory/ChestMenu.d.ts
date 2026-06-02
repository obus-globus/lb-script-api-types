import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class ChestMenu extends AbstractContainerMenu {
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
    static fiveRows(paramcontainerId: number, paraminventory: (Object | null)[]): ChestMenu;
    static fourRows(paramcontainerId: number, paraminventory: (Object | null)[]): ChestMenu;
    static getQuickCraftPlaceCount(paramquickCraftSlotsSize: number, paramquickCraftingType: number, paramitemStack: ItemStack): number;
    static getQuickcraftHeader(parammask: number): number;
    static getQuickcraftMask(paramheader: number, paramtype: number): number;
    static getQuickcraftType(parammask: number): number;
    static getRedstoneSignalFromBlockEntity(paramblockEntity: BlockEntity): number;
    static getRedstoneSignalFromContainer(paramcontainer: ItemStack[]): number;
    static isValidQuickcraftType(paramtype: number, paramplayer: Player): boolean;
    static oneRow(paramcontainerId: number, paraminventory: (Object | null)[]): ChestMenu;
    static sixRows(paramcontainerId: number, paraminventory: (Object | null)[]): ChestMenu;
    static sixRows(paramcontainerId: number, paraminventory: (Object | null)[], paramcontainer: ItemStack[]): ChestMenu;
    static threeRows(paramcontainerId: number, paraminventory: (Object | null)[]): ChestMenu;
    static threeRows(paramcontainerId: number, paraminventory: (Object | null)[], paramcontainer: ItemStack[]): ChestMenu;
    static twoRows(paramcontainerId: number, paraminventory: (Object | null)[]): ChestMenu;
    constructor(menuType: MenuType<Object>, containerId: number, inventory: (Object | null)[], rows: number)
    constructor(menuType: MenuType<Object>, containerId: number, inventory: (Object | null)[], container: ItemStack[], rows: number)
    readonly container: ItemStack[];
    // private containerRows: number;
    // private addChestGrid(container: ItemStack[], left: number, top: number): void;
    getContainer(): ItemStack[];
    getRowCount(): number;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removed(player: Player): void;
    stillValid(player: Player): boolean;
}