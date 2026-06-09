import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { UnbakedModel } from '../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { UnbakedModel$GuiLight } from '../../../../../net/minecraft/client/resources/model/UnbakedModel$GuiLight.d.ts'
import type { ItemTransforms } from '../../../../../net/minecraft/client/resources/model/cuboid/ItemTransforms.d.ts'
import type { QuadCollection } from '../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { UnbakedGeometry } from '../../../../../net/minecraft/client/resources/model/geometry/UnbakedGeometry.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { TextureSlots } from '../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
export interface ResolvedModel extends Object, ModelDebugName {
    bakeTopGeometry(textureSlots: TextureSlots, baker: ModelBaker, state: ModelState): QuadCollection;
    getTopAmbientOcclusion(): boolean;
    getTopGeometry(): (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => kotlin.String) => net.minecraft.client.resources.model.geometry.QuadCollection;
    getTopGuiLight(): UnbakedModel$GuiLight;
    getTopTextureSlots(): TextureSlots;
    getTopTransforms(): ItemTransforms;
    parent(): ResolvedModel;
    resolveParticleMaterial(textureSlots: TextureSlots, baker: ModelBaker): Material$Baked;
    wrapped(): UnbakedModel;
}