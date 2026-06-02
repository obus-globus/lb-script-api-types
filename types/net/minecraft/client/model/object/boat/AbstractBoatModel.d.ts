import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { BoatRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/BoatRenderState.d.ts'
export abstract class AbstractBoatModel extends EntityModel<BoatRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart)
    // private leftPaddle: ModelPart;
    // private rightPaddle: ModelPart;
    setupAnim(state: BoatRenderState): void;
}