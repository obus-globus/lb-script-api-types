import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ComparatorChainKt extends Object {
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:51}
     * @deprecated Use standard compareBy instead Use `compareBy(cond)`.
     */
    static compareByCondition<T extends unknown>(cond: (param0: T) => boolean): (param0: T, param1: T) => number;
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:40}
     * @deprecated Use standard compareValuesBy instead Use `compareValuesBy(a, b, cond)`.
     */
    static compareValueByCondition<T extends unknown>(a: T, b: T, cond: (param0: T) => boolean): number;
}