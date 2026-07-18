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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.kt:35}
     */
    readonly planningInfo: T;
    readonly provider: BlockIntentProvider<T>;
    readonly slot: HotbarItemSlot;
    readonly timing: IntentTiming;
    onIntentFulfilled(): void;
    validate(raycast: BlockHitResult): boolean;
}