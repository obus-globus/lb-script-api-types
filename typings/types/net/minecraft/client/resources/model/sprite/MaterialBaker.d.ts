import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { QuadAtlas } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { FabricMaterialBaker } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/FabricMaterialBaker.d.ts'
import type { SpriteFinder } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { MaterialBakerMixin } from '../../../../../../net/fabricmc/fabric/mixin/client/renderer/sprite/MaterialBakerMixin.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { Material } from '../../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Material$Baked } from '../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface MaterialBaker extends Object, FabricMaterialBaker, MaterialBakerMixin {
    get(material: Material, name: () => kotlin.String): Material$Baked;
    reportMissingReference(reference: string, name: () => kotlin.String): Material$Baked;
    resolveSlot(slots: TextureSlots, id: string, name: () => kotlin.String): Material$Baked;
    spriteFinder(arg0: QuadAtlas): SpriteFinder;
    spriteFinder(arg0: Identifier): SpriteFinder;
}