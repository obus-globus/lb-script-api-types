import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntRangeAdapter extends Object implements JsonDeserializer<{ start: number; endInclusive: number; step: number }>, JsonSerializer<{ start: number; endInclusive: number; step: number }> {
    static INSTANCE: IntRangeAdapter;
    deserialize(json: JsonElement, typeOfT: Type | null, context: JsonDeserializationContext | null): { start: number; endInclusive: number; step: number };
    serialize(src: { start: number; endInclusive: number; step: number }, typeOfSrc: Type, context: JsonSerializationContext): JsonElement;
}