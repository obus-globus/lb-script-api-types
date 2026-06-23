import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface JsonDeserializationContext extends Object{
    deserialize<T extends unknown>(arg0: JsonElement, arg1: Type): T;
}