import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ContainerLevelAccess } from '../../../../net/minecraft/world/inventory/ContainerLevelAccess.d.ts'
import type { DataSlot } from '../../../../net/minecraft/world/inventory/DataSlot.d.ts'
import type { ItemCombinerMenu } from '../../../../net/minecraft/world/inventory/ItemCombinerMenu.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class AnvilMenu extends ItemCombinerMenu {
    static ADDITIONAL_SLOT: number;
    static CARRIED_SLOT_SIZE: number;
    static INPUT_SLOT: number;
    static MAX_NAME_LENGTH: number;
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
    static calculateIncreasedRepairCost(parambaseCost: number): number;
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
    readonly cost: DataSlot;
    // private itemName: string;
    // private onlyRenaming: boolean;
    // private repairItemCountCost: number;
    createResult(): void;
    getCost(): number;
    isValidBlock(state: BlockState): boolean;
    mayPickup(player: Player, hasItem: boolean): boolean;
    onTake(player: Player, carried: ItemStack): void;
    setItemName(name: string): boolean;
}