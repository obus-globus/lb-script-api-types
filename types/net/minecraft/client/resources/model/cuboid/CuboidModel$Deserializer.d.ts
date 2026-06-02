import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { CuboidModel } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidModel.d.ts'
import type { UnbakedGeometry } from '../../../../../../net/minecraft/client/resources/model/geometry/UnbakedGeometry.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { TextureSlots$Data } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$Data.d.ts'
export class CuboidModel$Deserializer extends Object implements JsonDeserializer<CuboidModel> {
    constructor()
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext): CuboidModel;
    getAmbientOcclusion(object: JsonObject): boolean;
    getElements(context: JsonDeserializationContext, object: JsonObject): (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => kotlin.String) => net.minecraft.client.resources.model.geometry.QuadCollection;
    // private getParentName(object: JsonObject): string;
    // private getTextureMap(object: JsonObject): TextureSlots$Data;
}