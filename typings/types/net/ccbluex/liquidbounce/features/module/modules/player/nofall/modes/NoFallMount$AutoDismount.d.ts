import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Automatically dismounts after a configurable delay.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt:50}
 */
export class NoFallMount$AutoDismount extends ToggleableValueGroup {
    static INSTANCE: NoFallMount$AutoDismount;
    readonly delay: { start: number; endInclusive: number; step: number };
}