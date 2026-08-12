import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BreakingProgress } from '../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgress.d.ts'
export interface BreakingProgress$Provider extends Object{
    /**
     * Reads progress for a module-owned target. Vanilla can keep updating `destroyProgress`
     * without restoring `isDestroying` when continuing a previously stopped target.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/BreakingProgressRenderer.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/BreakingProgressRenderer.kt:61}
     */
    breakingProgress(): BreakingProgress | null;
}