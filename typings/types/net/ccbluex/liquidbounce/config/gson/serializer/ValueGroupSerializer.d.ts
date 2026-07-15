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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:43}
     */
    static FILE_SERIALIZER: ValueGroupSerializer;
    /**
     * This serializer is used to serialize {@link ValueGroup}s to JSON for interop communication
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:51}
     */
    static INTEROP_SERIALIZER: ValueGroupSerializer;
    /**
     * This serializer is used to serialize {@link ValueGroup}s to JSON for public config
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:59}
     */
    static PUBLIC_SERIALIZER: ValueGroupSerializer;
    /**
     * Serialize a {@link ValueGroup} to a read-only {@link JsonObject}
     *
     * Used for interop communication by {@link ReadOnlyComponentSerializer}
     * and {@link ReadOnlyThemeSerializer}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.kt:70}
     */
    static serializeReadOnly(valueGroup: ValueGroup, context: JsonSerializationContext): JsonObject;
    constructor(withValueType: boolean, includePrivate: boolean, includeNotAnOption: boolean)
    // private includeNotAnOption: boolean;
    // private includePrivate: boolean;
    // private withValueType: boolean;
    // private checkIfInclude(value: Value<Object>): boolean;
    serialize(src: ValueGroup, typeOfSrc: Type, context: JsonSerializationContext): JsonObject;
}