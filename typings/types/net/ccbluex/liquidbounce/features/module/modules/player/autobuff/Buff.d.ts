import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class Buff extends ToggleableValueGroup {
    constructor(name: string)
    /*not mapped: */ getPassesRequirements$net_ccbluex_liquidbounce(): boolean;
    execute(slot: HotbarItemSlot): void;
    isValidItem(stack: ItemStack, forUse: boolean): boolean;
    /**
     * Try to run feature if possible, otherwise return false
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/Buff.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/Buff.kt:43}
     */
    runIfPossible(): boolean;
}