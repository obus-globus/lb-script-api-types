import type { TreeTypeAdapter$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { JsonDeserializationContext } from '../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { TreeTypeAdapter } from '../../../../../com/google/gson/internal/bind/TreeTypeAdapter.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TreeTypeAdapter$GsonContextImpl extends Object implements JsonDeserializationContext, JsonSerializationContext {
    private constructor(null_: TreeTypeAdapter<T>)
    constructor(null_: TreeTypeAdapter<T>, arg1: TreeTypeAdapter$1)
    deserialize<R extends unknown>(arg0: JsonElement, arg1: Type): R;
    serialize(arg0: Object): JsonElement;
    serialize(arg0: Object, arg1: Type): JsonElement;
}