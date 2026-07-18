import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { ListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ListValue.d.ts'
export class RegistryListValue<T extends E[], E extends unknown> extends ListValue<T, E> {
    constructor(name: string, value: T, innerValueType: ValueType, innerType: Class<E>)
    /**
     * This is used to determine the registry endpoint for the API.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt#L158 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt:158}
     */
    readonly registry: string;
}