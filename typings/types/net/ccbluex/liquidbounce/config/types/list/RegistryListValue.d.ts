import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { ListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ListValue.d.ts'
export class RegistryListValue<T extends E[], E extends unknown> extends ListValue<T, E> {
    constructor(name: string, value: T, innerValueType: ValueType, innerType: Class<E>)
    /**
     * This is used to determine the registry endpoint for the API.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt#L158 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt:158}
     */
    readonly registry: string;
}