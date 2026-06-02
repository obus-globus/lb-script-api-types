import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
export class ComparatorChainKt extends Object {
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:48}
     */
    static compareByCondition(paramarg0: Function1<Object, boolean>): (param0: Object | null) => kotlin.Boolean;
    /**
     * false first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.kt:37}
     */
    static compareValueByCondition(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Function1<Object, boolean>): number;
}