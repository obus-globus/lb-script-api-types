import type { Double2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleFunction.d.ts'
import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BisectKt extends Object {
    /**
     * Finds the minimum between min and max.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt:24}
     */
    static findFunctionMinimumByBisect(from: number, to: number, minDelta: number, function_: (param0: number) => number): DoubleDoublePair;
}