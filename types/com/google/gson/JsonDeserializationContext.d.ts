import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JsonDeserializationContext extends Object{
    deserialize<T extends Object | number | string | boolean>(arg0: JsonElement, arg1: Type): T;
}