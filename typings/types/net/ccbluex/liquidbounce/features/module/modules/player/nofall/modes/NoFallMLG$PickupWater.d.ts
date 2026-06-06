import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class NoFallMLG$PickupWater extends ToggleableValueGroup {
    static INSTANCE: NoFallMLG$PickupWater;
    /**
     * Don't pick up before the lower bound, don't pick up after the upper bound
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt:51}
     */
    readonly pickupSpan: { start: number; endInclusive: number; step: number };
}