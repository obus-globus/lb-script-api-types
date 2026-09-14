import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueKt extends Object {
    /**
     * Order by name of {@link Value} (ignoreCase)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:59}
     */
    static VALUE_NAME_ORDER: (param0: Object, param1: Object) => number;
}