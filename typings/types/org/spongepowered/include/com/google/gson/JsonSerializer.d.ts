import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JsonElement } from '../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../org/spongepowered/include/com/google/gson/JsonSerializationContext.d.ts'
export interface JsonSerializer<T extends unknown> extends Object{
    serialize(arg0: T, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}