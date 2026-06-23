import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../com/viaversion/viaversion/libs/gson/JsonSerializationContext.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface JsonSerializer<T extends unknown> extends Object{
    serialize(arg0: T, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}