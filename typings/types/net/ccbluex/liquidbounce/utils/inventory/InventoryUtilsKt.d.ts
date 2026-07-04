import type { BiPredicate } from '../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { SwingMode } from '../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { ContainerItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ContainerItemSlot.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { MenuType } from '../../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class InventoryUtilsKt extends Object {
    /**
     * Finds the best slot in this iterable for mining {@link blockState} using `mc.player` as baseline.
     *
     * The result depends on current player context (e.g. creative state and durability filtering),
     * then ranks candidates by destroy speed and nearby-slot preference.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryUtils.kt#L107 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryUtils.kt:107}
     */
    static findBestToolToMineBlock(iterable: (ItemSlot | null)[], blockState: BlockState, ignoreDurability: boolean, predicate: (param0: ItemStack, param1: BlockState) => boolean): ItemSlot | null;
    static findBlocksEndingWith(targets: (Object | null)[]): Block[];
    static findEmptyStorageSlotsInInventory(): ItemSlot[];
    static findItemsInContainer(abstractContainerScreen: AbstractContainerScreen<any>): ContainerItemSlot[];
    static findNonEmptySlotsInInventory(): ItemSlot[];
    static findNonEmptyStorageSlotsInInventory(): ItemSlot[];
    static getSlotsInContainer(abstractContainerScreen: AbstractContainerScreen<any>): ContainerItemSlot[];
    static getTypeOrNull(paramarg0: AbstractContainerMenu): MenuType<any>;
    static hasInventorySpace(): boolean;
    static mergeableCapacityFor(iterable: ItemSlot[], itemStack: ItemStack, blacklist: ItemSlot[]): number;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot): InteractionResult;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot, paramarg2: number): InteractionResult;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot, paramarg2: number, paramarg3: number): InteractionResult;
    static useHotbarSlotOrOffhand(slot: EventListener, ticksUntilReset: HotbarItemSlot, yRot: number, xRot: number, swingMode: number): InteractionResult;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: SwingMode): InteractionResult;
}