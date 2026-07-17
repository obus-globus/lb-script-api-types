import type { JsonDeserializationContext } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializationContext.d.ts'
import type { TreeTypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/TreeTypeAdapter.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TreeTypeAdapter$GsonContextImpl extends Object implements JsonDeserializationContext, JsonSerializationContext {
    private constructor(null_: TreeTypeAdapter<Object>)
    deserialize<R extends unknown>(arg0: JsonElement, arg1: Type): R;
    serialize(arg0: Object): JsonElement;
    serialize(arg0: Object, arg1: Type): JsonElement;
}