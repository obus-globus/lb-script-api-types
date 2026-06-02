import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { BeaconMenu$PaymentSlot } from '../../../../net/minecraft/world/inventory/BeaconMenu$PaymentSlot.d.ts'
import type { ContainerData } from '../../../../net/minecraft/world/inventory/ContainerData.d.ts'
import type { ContainerLevelAccess } from '../../../../net/minecraft/world/inventory/ContainerLevelAccess.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class BeaconMenu extends AbstractContainerMenu {
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
    static decodeEffect(paramid: number): Holder<MobEffect>;
    static encodeEffect(parammobEffect: Holder<MobEffect>): number;
    static getQuickCraftPlaceCount(paramquickCraftSlotsSize: number, paramquickCraftingType: number, paramitemStack: ItemStack): number;
    static getQuickcraftHeader(parammask: number): number;
    static getQuickcraftMask(paramheader: number, paramtype: number): number;
    static getQuickcraftType(parammask: number): number;
    static getRedstoneSignalFromBlockEntity(paramblockEntity: BlockEntity): number;
    static getRedstoneSignalFromContainer(paramcontainer: ItemStack[]): number;
    static isValidQuickcraftType(paramtype: number, paramplayer: Player): boolean;
    constructor(containerId: number, inventory: ItemStack[])
    constructor(containerId: number, inventory: ItemStack[], beaconData: ContainerData, access: ContainerLevelAccess)
    // private access: ContainerLevelAccess;
    // private beacon: ItemStack[];
    // private beaconData: ContainerData;
    // private paymentSlot: BeaconMenu$PaymentSlot;
    getLevels(): number;
    getPrimaryEffect(): Holder<MobEffect>;
    getSecondaryEffect(): Holder<MobEffect>;
    hasPayment(): boolean;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removed(player: Player): void;
    setData(id: number, value: number): void;
    stillValid(player: Player): boolean;
    updateEffects(primary: Optional<Holder<MobEffect>>, secondary: Optional<Holder<MobEffect>>): void;
}