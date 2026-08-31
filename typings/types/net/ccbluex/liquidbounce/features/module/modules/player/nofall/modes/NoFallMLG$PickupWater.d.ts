import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class NoFallMLG$PickupWater extends ToggleableValueGroup {
    static INSTANCE: NoFallMLG$PickupWater;
    /**
     * Don't pick up before the lower bound, don't pick up after the upper bound
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt:73}
     */
    readonly pickupSpan: { start: number; endInclusive: number; step: number };
}