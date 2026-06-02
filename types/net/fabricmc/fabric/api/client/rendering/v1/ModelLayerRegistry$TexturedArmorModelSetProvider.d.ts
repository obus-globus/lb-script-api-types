import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayerDefinition } from '../../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ArmorModelSet } from '../../../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
export interface ModelLayerRegistry$TexturedArmorModelSetProvider extends Object{
    createArmorModelSet(): ArmorModelSet<LayerDefinition>;
}