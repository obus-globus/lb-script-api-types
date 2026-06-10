import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelLayerRegistry$TexturedArmorModelSetProvider } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ModelLayerRegistry$TexturedArmorModelSetProvider.d.ts'
import type { ModelLayerRegistry$TexturedLayerDefinitionProvider } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ModelLayerRegistry$TexturedLayerDefinitionProvider.d.ts'
import type { ModelLayerLocation } from '../../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ArmorModelSet } from '../../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
export class ModelLayerImpl extends Object {
    static ARMOR_PROVIDERS: Map<ArmorModelSet<ModelLayerLocation>, () => ArmorModelSet<LayerDefinition>>;
    static PROVIDERS: Map<ModelLayerLocation, () => LayerDefinition>;
    private constructor()
}