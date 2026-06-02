import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelLayerLocation } from '../../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { BoatRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/BoatRenderState.d.ts'
export class BoatModel1_8 extends EntityModel<BoatRenderState> {
    static MODEL_LAYER: ModelLayerLocation;
    static MODEL_Y_OFFSET: number;
    static getTexturedModelData(): LayerDefinition;
    constructor(arg0: ModelPart)
    setupAnim(arg0: BoatRenderState): void;
}