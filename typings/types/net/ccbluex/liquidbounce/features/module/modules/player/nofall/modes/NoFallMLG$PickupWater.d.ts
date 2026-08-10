import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class NoFallMLG$PickupWater extends ToggleableValueGroup {
    static INSTANCE: NoFallMLG$PickupWater;
    /**
     * Don't pick up before the lower bound, don't pick up after the upper bound
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt:54}
     */
    readonly pickupSpan: { start: number; endInclusive: number; step: number };
}