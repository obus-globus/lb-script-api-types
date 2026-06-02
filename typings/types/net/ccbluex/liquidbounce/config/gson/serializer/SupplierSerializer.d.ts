import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SupplierSerializer extends Object implements JsonSerializer<() => Object | null> {
    static INSTANCE: SupplierSerializer;
    serialize(src: () => Object | null, typeOfSrc: Type, context: JsonSerializationContext): JsonElement;
}