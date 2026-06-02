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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryUtils.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryUtils.kt:89}
     */
    static findBestToolToMineBlock(paramarg0: (Object | null)[], paramarg1: BlockState, paramarg2: boolean, paramarg3: (param0: ItemStack, param1: BlockState) => kotlin.Boolean): Object | null;
    static findBlocksEndingWith(paramarg0: (Object | null)[]): Block[];
    static findEmptyStorageSlotsInInventory(): ItemSlot[];
    static findItemsInContainer(paramarg0: AbstractContainerScreen<Object>): ContainerItemSlot[];
    static findNonEmptySlotsInInventory(): ItemSlot[];
    static findNonEmptyStorageSlotsInInventory(): ItemSlot[];
    static getSlotsInContainer(paramarg0: AbstractContainerScreen<Object>): ContainerItemSlot[];
    static getTypeOrNull(paramarg0: AbstractContainerMenu): MenuType<Object>;
    static hasInventorySpace(): boolean;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot): InteractionResult;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot, paramarg2: number): InteractionResult;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot, paramarg2: number, paramarg3: number): InteractionResult;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot, paramarg2: number, paramarg3: number, paramarg4: number): InteractionResult;
    static useHotbarSlotOrOffhand(paramarg0: EventListener, paramarg1: HotbarItemSlot, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: SwingMode): InteractionResult;
}