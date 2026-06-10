import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelLayerRegistry$TexturedArmorModelSetProvider } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ModelLayerRegistry$TexturedArmorModelSetProvider.d.ts'
import type { ModelLayerRegistry$TexturedLayerDefinitionProvider } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ModelLayerRegistry$TexturedLayerDefinitionProvider.d.ts'
import type { ModelLayerLocation } from '../../../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { LayerDefinition } from '../../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ArmorModelSet } from '../../../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
export class ModelLayerRegistry extends Object {
    static registerArmorModelLayers(paramarg0: ArmorModelSet<ModelLayerLocation>, paramarg1: () => ArmorModelSet<LayerDefinition>): void;
    static registerModelLayer(paramarg0: ModelLayerLocation, paramarg1: () => LayerDefinition): void;
    private constructor()
}