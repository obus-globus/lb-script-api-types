import type { JsonDeserializationContext } from '../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TreeTypeAdapter$GsonContextImpl extends Object implements JsonDeserializationContext, JsonSerializationContext {
    private constructor(null_: TreeTypeAdapter$GsonContextImpl)
    deserialize<R extends Object | number | string | boolean>(arg0: JsonElement, arg1: Type): R;
    serialize(arg0: Object): JsonElement;
    serialize(arg0: Object, arg1: Type): JsonElement;
}