import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Automatically dismounts after a configurable delay.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt:47}
 */
export class NoFallMount$AutoDismount extends ToggleableValueGroup {
    static INSTANCE: NoFallMount$AutoDismount;
    readonly delay: { start: number; endInclusive: number; step: number };
}