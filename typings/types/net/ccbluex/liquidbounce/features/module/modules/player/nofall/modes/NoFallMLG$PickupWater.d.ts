import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class NoFallMLG$PickupWater extends ToggleableValueGroup {
    static INSTANCE: NoFallMLG$PickupWater;
    /**
     * Don't pick up before the lower bound, don't pick up after the upper bound
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt:71}
     */
    readonly pickupSpan: { start: number; endInclusive: number; step: number };
}