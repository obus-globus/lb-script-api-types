import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueKt extends Object {
    /**
     * Order by name of {@link Value} (ignoreCase)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Value.kt:57}
     */
    static VALUE_NAME_ORDER: (param0: Object, param1: Object) => number;
}