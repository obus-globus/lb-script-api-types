import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../com/google/gson/JsonSerializationContext.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JsonSerializer<T extends Object | number | string | boolean> extends Object{
    serialize(arg0: T, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}