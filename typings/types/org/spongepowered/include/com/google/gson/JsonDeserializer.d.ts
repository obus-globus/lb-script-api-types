import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JsonDeserializationContext } from '../../../../../../org/spongepowered/include/com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
export interface JsonDeserializer<T extends unknown> extends Object{
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): T;
}