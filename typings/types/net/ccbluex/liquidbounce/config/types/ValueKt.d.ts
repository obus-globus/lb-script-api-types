import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueKt extends Object {
    /**
     * Order by name of {@link Value} (ignoreCase)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:57}
     */
    static VALUE_NAME_ORDER: (param0: Object, param1: Object) => number;
}