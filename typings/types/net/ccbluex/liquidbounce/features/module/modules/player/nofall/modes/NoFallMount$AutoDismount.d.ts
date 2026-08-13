import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Automatically dismounts after a configurable delay.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt:50}
 */
export class NoFallMount$AutoDismount extends ToggleableValueGroup {
    static INSTANCE: NoFallMount$AutoDismount;
    readonly delay: { start: number; endInclusive: number; step: number };
}