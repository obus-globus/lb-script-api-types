import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export class PufferfishMidModel extends EntityModel<EntityRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private leftBlueFin: ModelPart;
    // private rightBlueFin: ModelPart;
    setupAnim(state: EntityRenderState): void;
}