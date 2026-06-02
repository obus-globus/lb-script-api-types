import type { JsonPrimitive } from '../../../../../../com/google/gson/JsonPrimitive.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
export class TaggedSerializer extends Object implements JsonSerializer<Tagged> {
    static INSTANCE: TaggedSerializer;
    serialize(src: Tagged, typeOfSrc: Type, context: JsonSerializationContext): JsonPrimitive;
}