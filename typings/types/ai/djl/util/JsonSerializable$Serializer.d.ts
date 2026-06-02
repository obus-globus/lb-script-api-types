import type { JsonSerializable } from '../../../ai/djl/util/JsonSerializable.d.ts'
import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class JsonSerializable$Serializer extends Object implements JsonSerializer<JsonSerializable> {
    constructor()
    serialize(arg0: JsonSerializable, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}