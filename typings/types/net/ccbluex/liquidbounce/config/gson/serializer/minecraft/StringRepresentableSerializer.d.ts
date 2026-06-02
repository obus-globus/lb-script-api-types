import type { JsonPrimitive } from '../../../../../../../com/google/gson/JsonPrimitive.d.ts'
import type { JsonSerializationContext } from '../../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class StringRepresentableSerializer extends Object implements JsonSerializer<StringRepresentable> {
    static INSTANCE: StringRepresentableSerializer;
    serialize(src: StringRepresentable | null, typeOfSrc: Type, context: JsonSerializationContext): JsonPrimitive | null;
}