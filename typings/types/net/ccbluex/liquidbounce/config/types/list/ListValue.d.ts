import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
export class ListValue<T extends E[], E extends unknown> extends Value<T> {
    constructor(name: string, value: T, valueType: ValueType, innerValueType: ValueType, innerType: Class<E>)
    /**
     * Used to deserialize the {@link value} from JSON.
     * TODO: Might replace {@link innerType} with a {@link Class} variable
     *   from the inner value type in the future.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt:55}
     */
    readonly innerType: Class<E>;
    /**
     * Used to determine the type of the inner value.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/ListValue.kt:48}
     */
    readonly innerValueType: ValueType;
    deserializeFrom(gson: Gson, element: JsonElement): void;
    setByString(string: string): void;
}