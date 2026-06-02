import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../com/google/gson/JsonSerializer.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GsonSupplierSerializer extends Object implements JsonSerializer<Supplier<Object>> {
    static INSTANCE: GsonSupplierSerializer;
    constructor()
    serialize(arg0: Supplier<Object>, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}