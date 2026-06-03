import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
export class ComparatorChainKt extends Object {
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:48}
     * @deprecated Use standard compareBy instead
     */
    static compareByCondition(cond: Function1<Object, boolean>): (param0: Object | null) => kotlin.Boolean;
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:37}
     * @deprecated Use standard compareValuesBy instead
     */
    static compareValueByCondition(a: Object | null, b: Object | null, cond: Function1<Object, boolean>): number;
}