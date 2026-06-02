import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { ChickenRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ChickenRenderState.d.ts'
export abstract class ChickenModel extends EntityModel<ChickenRenderState> {
    static MODEL_Y_OFFSET: number;
    static Y_OFFSET: number;
    constructor(root: ModelPart)
    // private leftLeg: ModelPart;
    // private leftWing: ModelPart;
    // private rightLeg: ModelPart;
    // private rightWing: ModelPart;
    setupAnim(state: ChickenRenderState): void;
}