import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class NoFallMLG$PickupWater extends ToggleableValueGroup {
    static INSTANCE: NoFallMLG$PickupWater;
    /**
     * Don't pick up before the lower bound, don't pick up after the upper bound
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt:54}
     */
    readonly pickupSpan: { start: number; endInclusive: number; step: number };
}