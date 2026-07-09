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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt:98}
 */
export class MutableListValue<T extends E[], E extends unknown> extends ListValue<T, E> {
    constructor(name: string, value: T, innerValueType: ValueType, innerType: Class<E>)
}