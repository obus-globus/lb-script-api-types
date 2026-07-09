import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ComparatorChainKt extends Object {
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:51}
     * @deprecated Use standard compareBy instead Use `compareBy(cond)`.
     */
    static compareByCondition(cond: (param0: Object) => boolean): (param0: Object) => boolean;
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:40}
     * @deprecated Use standard compareValuesBy instead Use `compareValuesBy(a, b, cond)`.
     */
    static compareValueByCondition(a: Object | null, b: Object | null, cond: (param0: Object) => boolean): number;
}