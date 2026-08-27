import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BreakingProgress } from '../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgress.d.ts'
export interface BreakingProgress$Provider extends Object{
    /**
     * Reads progress for a module-owned target. Vanilla can keep updating `destroyProgress`
     * without restoring `isDestroying` when continuing a previously stopped target.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/BreakingProgressRenderer.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/BreakingProgressRenderer.kt:60}
     */
    breakingProgress(): BreakingProgress | null;
}