import type { IAbstractContainerMenu } from '../../../../com/viaversion/viafabricplus/injection/access/interaction/container_clicking/IAbstractContainerMenu.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HashedStack } from '../../../../net/minecraft/network/HashedStack.d.ts'
import type { SlotAccess } from '../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ClickAction } from '../../../../net/minecraft/world/inventory/ClickAction.d.ts'
import type { ContainerData } from '../../../../net/minecraft/world/inventory/ContainerData.d.ts'
import type { ContainerInput } from '../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { ContainerListener } from '../../../../net/minecraft/world/inventory/ContainerListener.d.ts'
import type { ContainerSynchronizer } from '../../../../net/minecraft/world/inventory/ContainerSynchronizer.d.ts'
import type { DataSlot } from '../../../../net/minecraft/world/inventory/DataSlot.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { RemoteSlot } from '../../../../net/minecraft/world/inventory/RemoteSlot.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export abstract class AbstractContainerMenu extends Object implements IAbstractContainerMenu {
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
    constructor(menuType: MenuType<any>, containerId: number)
    readonly carried: ItemStack;
    containerId: number;
    // private containerListeners: ContainerListener[];
    // private dataSlots: DataSlot[];
    // private lastSlots: ItemStack[];
    // private menuType: MenuType<any>;
    // private quickcraftSlots: Slot[];
    // private quickcraftStatus: number;
    // private quickcraftType: number;
    readonly remoteCarried: RemoteSlot;
    // private remoteDataSlots: (Object | null)[];
    // private remoteSlots: RemoteSlot[];
    slots: Slot[];
    readonly stateId: number;
    // private suppressRemoteUpdates: boolean;
    readonly synchronizer: ContainerSynchronizer;
    // private viaFabricPlus$actionId: number;
    addDataSlot(dataSlot: DataSlot): DataSlot;
    addDataSlots(container: ContainerData): void;
    addInventoryExtendedSlots(inventory: ItemStack[], left: number, top: number): void;
    addInventoryHotbarSlots(inventory: ItemStack[], left: number, top: number): void;
    addSlot(slot: Slot): Slot;
    addSlotListener(listener: ContainerListener): void;
    addStandardInventorySlots(container: ItemStack[], left: number, top: number): void;
    broadcastChanges(): void;
    broadcastFullState(): void;
    canDragTo(slot: Slot): boolean;
    canTakeItemForPickAll(carried: ItemStack, target: Slot): boolean;
    clearContainer(player: Player, container: ItemStack[]): void;
    clickMenuButton(player: Player, buttonId: number): boolean;
    clicked(slotIndex: number, buttonNum: number, containerInput: ContainerInput, player: Player): void;
    // private createCarriedSlotAccess(): SlotAccess;
    // private doClick(slotIndex: number, buttonNum: number, containerInput: ContainerInput, player: Player): void;
    findSlot(inventory: ItemStack[], slotIndex: number): OptionalInt;
    getCarried(): ItemStack;
    getItems(): ItemStack[];
    getSlot(index: number): Slot;
    getStateId(): number;
    getType(): MenuType<any>;
    incrementStateId(): number;
    initializeContents(stateId: number, items: ItemStack[], carried: ItemStack): void;
    isValidSlotIndex(slotIndex: number): boolean;
    moveItemStackTo(itemStack: ItemStack, startSlot: number, endSlot: number, backwards: boolean): boolean;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removeSlotListener(listener: ContainerListener): void;
    removed(player: Player): void;
    resetQuickCraft(): void;
    resumeRemoteUpdates(): void;
    sendAllDataToRemote(): void;
    setCarried(carried: ItemStack): void;
    setData(id: number, value: number): void;
    setItem(slot: number, stateId: number, itemStack: ItemStack): void;
    setRemoteCarried(carriedItem: HashedStack): void;
    setRemoteSlot(slot: number, itemStack: ItemStack): void;
    setRemoteSlotUnsafe(slot: number, itemStack: HashedStack): void;
    setSelectedBundleItemIndex(slotIndex: number, selectedItemIndex: number): void;
    setSynchronizer(synchronizer: ContainerSynchronizer): void;
    slotsChanged(container: ItemStack[]): void;
    stillValid(player: Player): boolean;
    suppressRemoteUpdates(): void;
    // private synchronizeCarriedToRemote(): void;
    // private synchronizeDataSlotToRemote(i: number, current: number): void;
    // private synchronizeSlotToRemote(i: number, current: ItemStack, currentCopy: () => ItemStack): void;
    transferState(otherContainer: AbstractContainerMenu): void;
    // private triggerSlotListeners(i: number, current: ItemStack, currentCopy: () => ItemStack): void;
    // private tryItemClickBehaviourOverride(player: Player, clickAction: ClickAction, slot: Slot, clicked: ItemStack, carried: ItemStack): boolean;
    // private updateDataSlotListeners(id: number, currentValue: number): void;
    viaFabricPlus$getActionId(): number;
    viaFabricPlus$incrementAndGetActionId(): number;
}