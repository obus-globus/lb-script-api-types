import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { WolfRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WolfRenderState.d.ts'
export abstract class WolfModel extends EntityModel<WolfRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private head: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    // private tail: ModelPart;
    setSittingPose(state: WolfRenderState): void;
    setupAnim(state: WolfRenderState): void;
    shakeOffWater(state: WolfRenderState): void;
}