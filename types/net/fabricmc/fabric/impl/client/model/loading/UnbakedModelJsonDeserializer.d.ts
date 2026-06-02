import type { JsonDeserializationContext } from '../../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../../com/google/gson/JsonElement.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnbakedModel } from '../../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
export class UnbakedModelJsonDeserializer extends Object implements JsonDeserializer<UnbakedModel> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): UnbakedModel;
}