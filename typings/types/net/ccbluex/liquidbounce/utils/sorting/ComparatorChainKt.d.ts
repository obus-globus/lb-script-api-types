import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ComparatorChainKt extends Object {
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:51}
     * @deprecated Use standard compareBy instead Use `compareBy(cond)`.
     */
    static compareByCondition(cond: (param0: Object) => boolean): (param0: Object) => boolean;
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:40}
     * @deprecated Use standard compareValuesBy instead Use `compareValuesBy(a, b, cond)`.
     */
    static compareValueByCondition(a: Object | null, b: Object | null, cond: (param0: Object) => boolean): number;
}