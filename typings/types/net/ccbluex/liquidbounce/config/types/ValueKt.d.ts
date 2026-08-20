import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueKt extends Object {
    /**
     * Order by name of {@link Value} (ignoreCase)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:59}
     */
    static VALUE_NAME_ORDER: (param0: Object, param1: Object) => number;
}