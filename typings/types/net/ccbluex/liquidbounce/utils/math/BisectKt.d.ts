import type { Double2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleFunction.d.ts'
import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BisectKt extends Object {
    /**
     * Finds the minimum between min and max.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt:27}
     */
    static findFunctionMinimumByBisect(from: number, to: number, minDelta: number, function_: (param0: number) => number): DoubleDoublePair;
}