import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelLayerRegistry$TexturedArmorModelSetProvider } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ModelLayerRegistry$TexturedArmorModelSetProvider.d.ts'
import type { ModelLayerRegistry$TexturedLayerDefinitionProvider } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ModelLayerRegistry$TexturedLayerDefinitionProvider.d.ts'
import type { ModelLayerLocation } from '../../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
export class ModelLayerImpl extends Object {
    static ARMOR_PROVIDERS: Map<Object | null, () => net.minecraft.client.renderer.entity.ArmorModelSet<net.minecraft.client.model.geom.builders.LayerDefinition>>;
    static PROVIDERS: Map<ModelLayerLocation, () => net.minecraft.client.model.geom.builders.LayerDefinition>;
    private constructor()
}