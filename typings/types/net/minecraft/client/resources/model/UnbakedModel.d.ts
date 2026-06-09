import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { UnbakedModel$GuiLight } from '../../../../../net/minecraft/client/resources/model/UnbakedModel$GuiLight.d.ts'
import type { ItemTransforms } from '../../../../../net/minecraft/client/resources/model/cuboid/ItemTransforms.d.ts'
import type { UnbakedGeometry } from '../../../../../net/minecraft/client/resources/model/geometry/UnbakedGeometry.d.ts'
import type { TextureSlots } from '../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { TextureSlots$Data } from '../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$Data.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface UnbakedModel extends Object {
    ambientOcclusion(): boolean;
    geometry(): (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => kotlin.String) => net.minecraft.client.resources.model.geometry.QuadCollection;
    guiLight(): UnbakedModel$GuiLight;
    parent(): Identifier;
    textureSlots(): TextureSlots$Data;
    transforms(): ItemTransforms;
}