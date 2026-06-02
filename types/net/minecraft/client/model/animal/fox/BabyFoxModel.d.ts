import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { FoxModel } from '../../../../../../net/minecraft/client/model/animal/fox/FoxModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { FoxRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FoxRenderState.d.ts'
export class BabyFoxModel extends FoxModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private babyWalkAnimation: KeyframeAnimation;
    setCrouchingPose(state: FoxRenderState): void;
    setSittingPose(state: FoxRenderState): void;
    setSleepingPose(state: FoxRenderState): void;
    setWalkingPose(state: FoxRenderState): void;
}