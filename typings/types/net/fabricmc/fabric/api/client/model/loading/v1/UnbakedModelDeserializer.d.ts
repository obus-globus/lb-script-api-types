import type { JsonDeserializationContext } from '../../../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonObject } from '../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { UnbakedModel } from '../../../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
export interface UnbakedModelDeserializer extends Object{
    deserialize(arg0: JsonObject, arg1: JsonDeserializationContext): UnbakedModel;
}