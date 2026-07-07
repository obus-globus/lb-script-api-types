import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockChangeInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeInfo.d.ts'
import type { BlockIntentProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockIntentProvider.d.ts'
import type { IntentTiming } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/IntentTiming.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockHitResult } from '../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class BlockChangeIntent<T extends unknown> extends Object {
    constructor(blockChangeInfo: BlockChangeInfo, slot: HotbarItemSlot, timing: IntentTiming, planningInfo: T, provider: BlockIntentProvider<T>)
    readonly blockChangeInfo: BlockChangeInfo;
    /**
     * Info for the planner.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.kt:35}
     */
    readonly planningInfo: T;
    readonly provider: BlockIntentProvider<T>;
    readonly slot: HotbarItemSlot;
    readonly timing: IntentTiming;
    onIntentFulfilled(): void;
    validate(raycast: BlockHitResult): boolean;
}