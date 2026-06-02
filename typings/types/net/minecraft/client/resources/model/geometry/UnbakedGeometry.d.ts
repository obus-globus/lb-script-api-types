import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { QuadCollection } from '../../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
export interface UnbakedGeometry extends Object{
    bake(textureSlots: TextureSlots, modelBaker: ModelBaker, modelState: ModelState, name: () => kotlin.String): QuadCollection;
}