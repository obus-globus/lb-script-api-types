import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueKt extends Object {
    /**
     * Order by name of {@link Value} (ignoreCase)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:57}
     */
    static VALUE_NAME_ORDER: (param0: Object, param1: Object) => number;
}