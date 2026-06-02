import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClosedRange } from '../../../../../../kotlin/ranges/ClosedRange.d.ts'
export class RangeAdapter extends Object implements JsonDeserializer<ClosedRange<Object>>, JsonSerializer<ClosedRange<Object>> {
    static INSTANCE: RangeAdapter;
    // private TYPE_DOUBLE_RANGE: Class<ClosedFloatingPointRange<number>>;
    // private TYPE_FLOAT_RANGE: Class<ClosedFloatingPointRange<number>>;
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext | null): ClosedRange<Object>;
    serialize(src: ClosedRange<Object>, typeOfSrc: Type, context: JsonSerializationContext): JsonElement;
}