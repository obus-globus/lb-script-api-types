import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { FoxRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FoxRenderState.d.ts'
export abstract class FoxModel extends EntityModel<FoxRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart)
    // private body: ModelPart;
    head: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private legMotionPos: number;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    // private tail: ModelPart;
    setCrouchingPose(state: FoxRenderState): void;
    setPouncingPose(state: FoxRenderState): void;
    setSittingPose(state: FoxRenderState): void;
    setSleepingPose(state: FoxRenderState): void;
    setWalkingPose(state: FoxRenderState): void;
    setupAnim(state: FoxRenderState): void;
}