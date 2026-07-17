import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
export class EntityModelSet extends Object {
    static EMPTY: EntityModelSet;
    static vanilla(): EntityModelSet;
    constructor(roots: JavaMap<ModelLayerLocation, LayerDefinition>)
    // private roots: JavaMap<ModelLayerLocation, LayerDefinition>;
    bakeLayer(id: ModelLayerLocation): ModelPart;
}