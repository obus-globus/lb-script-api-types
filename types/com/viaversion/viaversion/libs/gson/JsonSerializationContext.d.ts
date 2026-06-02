import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface JsonSerializationContext extends Object{
    serialize(arg0: Object): JsonElement;
    serialize(arg0: Object, arg1: Type): JsonElement;
}