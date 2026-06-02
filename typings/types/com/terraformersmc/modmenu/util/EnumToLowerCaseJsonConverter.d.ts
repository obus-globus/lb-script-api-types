import type { JsonDeserializationContext } from '../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EnumToLowerCaseJsonConverter extends Object implements JsonDeserializer<Enum<Object>>, JsonSerializer<Enum<Object>> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): Enum<Object>;
    serialize(arg0: Enum<Object>, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}