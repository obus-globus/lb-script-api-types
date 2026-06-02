import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidFace } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidFace.d.ts'
export class CuboidFace$Deserializer extends Object implements JsonDeserializer<CuboidFace> {
    constructor()
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext): CuboidFace;
}