import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { ListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ListValue.d.ts'
/**
 * This allows users to input any kind of {@link E} value,
 * so it might not deserialize correctly if the input cannot be
 * converted to the {@link innerType}.
 *
 * TODO: Implement support for input validation in the UI.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt:91}
 */
export class MutableListValue<T extends E[], E extends Object | number | string | boolean> extends ListValue<T, E> {
    constructor(name: string, value: T, innerValueType: ValueType, innerType: Class<E>)
}