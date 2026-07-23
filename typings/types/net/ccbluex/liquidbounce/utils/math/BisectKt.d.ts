import type { Double2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleFunction.d.ts'
import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BisectKt extends Object {
    /**
     * Finds the minimum between min and max.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Bisect.kt:27}
     */
    static findFunctionMinimumByBisect(from: number, to: number, minDelta: number, function_: (param0: number) => number): DoubleDoublePair;
}