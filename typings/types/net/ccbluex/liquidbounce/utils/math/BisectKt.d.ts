import type { Double2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleFunction.d.ts'
import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BisectKt extends Object {
    /**
     * Finds the minimum between min and max.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt:24}
     */
    static findFunctionMinimumByBisect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => kotlin.Double): DoubleDoublePair;
}