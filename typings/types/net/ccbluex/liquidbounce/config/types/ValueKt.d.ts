import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueKt extends Object {
    /**
     * Order by name of {@link Value} (ignoreCase)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:59}
     */
    static VALUE_NAME_ORDER: (param0: Object, param1: Object) => number;
}