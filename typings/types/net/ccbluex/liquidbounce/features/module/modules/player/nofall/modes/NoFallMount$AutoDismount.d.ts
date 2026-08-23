import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Automatically dismounts after a configurable delay.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt:50}
 */
export class NoFallMount$AutoDismount extends ToggleableValueGroup {
    static INSTANCE: NoFallMount$AutoDismount;
    readonly delay: { start: number; endInclusive: number; step: number };
}