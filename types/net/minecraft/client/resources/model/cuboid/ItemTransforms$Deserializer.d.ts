import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemTransform } from '../../../../../../net/minecraft/client/resources/model/cuboid/ItemTransform.d.ts'
import type { ItemTransforms } from '../../../../../../net/minecraft/client/resources/model/cuboid/ItemTransforms.d.ts'
import type { ItemDisplayContext } from '../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export class ItemTransforms$Deserializer extends Object implements JsonDeserializer<ItemTransforms> {
    constructor()
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext): ItemTransforms;
    // private getTransform(context: JsonDeserializationContext, object: JsonObject, transform: ItemDisplayContext): ItemTransform;
}