import type { JsonDeserializationContext } from '../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JsonDeserializer<T extends Object | number | string | boolean> extends Object{
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): T;
}