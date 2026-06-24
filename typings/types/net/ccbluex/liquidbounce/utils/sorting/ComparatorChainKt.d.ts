import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ComparatorChainKt extends Object {
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:48}
     * @deprecated Use standard compareBy instead Use `compareBy(cond)`.
     */
    static compareByCondition(cond: (param0: Object) => boolean): (param0: Object) => boolean;
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:37}
     * @deprecated Use standard compareValuesBy instead Use `compareValuesBy(a, b, cond)`.
     */
    static compareValueByCondition(a: Object | null, b: Object | null, cond: (param0: Object) => boolean): number;
}