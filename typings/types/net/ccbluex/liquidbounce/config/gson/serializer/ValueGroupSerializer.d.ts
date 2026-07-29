import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueGroupSerializer$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer$Companion.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class ValueGroupSerializer extends Object implements JsonSerializer<ValueGroup> {
    static Companion: ValueGroupSerializer$Companion;
    /**
     * This serializer is used to serialize {@link ValueGroup}s to JSON
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:44}
     */
    static FILE_SERIALIZER: ValueGroupSerializer;
    /**
     * This serializer is used to serialize {@link ValueGroup}s to JSON for interop communication
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:52}
     */
    static INTEROP_SERIALIZER: ValueGroupSerializer;
    /**
     * This serializer is used to serialize {@link ValueGroup}s to JSON for public config
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:60}
     */
    static PUBLIC_SERIALIZER: ValueGroupSerializer;
    /**
     * Serialize a {@link ValueGroup} to a read-only {@link JsonObject}
     *
     * Used for interop communication by {@link ReadOnlyComponentSerializer}
     * and {@link ReadOnlyThemeSerializer}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:71}
     */
    static serializeReadOnly(valueGroup: ValueGroup, context: JsonSerializationContext): JsonObject;
    constructor(withValueType: boolean, includePrivate: boolean, includeNotAnOption: boolean)
    // private includeNotAnOption: boolean;
    // private includePrivate: boolean;
    // private withValueType: boolean;
    // private checkIfInclude(value: Value<Object>): boolean;
    serialize(src: ValueGroup, typeOfSrc: Type, context: JsonSerializationContext): JsonObject;
}