import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueGroupSerializer } from '../../../../../../net/ccbluex/liquidbounce/config/gson/serializer/ValueGroupSerializer.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class ValueGroupSerializer$Companion extends Object {
    FILE_SERIALIZER: ValueGroupSerializer;
    INTEROP_SERIALIZER: ValueGroupSerializer;
    PUBLIC_SERIALIZER: ValueGroupSerializer;
    serializeReadOnly(valueGroup: ValueGroup, context: JsonSerializationContext): JsonObject;
}