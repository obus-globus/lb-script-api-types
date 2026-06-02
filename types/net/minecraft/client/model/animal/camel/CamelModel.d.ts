import type { AnimationDefinition } from '../../../../../../net/minecraft/client/animation/AnimationDefinition.d.ts'
import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CamelRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CamelRenderState.d.ts'
export abstract class CamelModel extends EntityModel<CamelRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart, walk: AnimationDefinition, sit: AnimationDefinition, sitPose: AnimationDefinition, standup: AnimationDefinition, idle: AnimationDefinition, dash: AnimationDefinition)
    // private dashAnimation: KeyframeAnimation;
    // private head: ModelPart;
    // private idleAnimation: KeyframeAnimation;
    // private sitAnimation: KeyframeAnimation;
    // private sitPoseAnimation: KeyframeAnimation;
    // private standupAnimation: KeyframeAnimation;
    // private walkAnimation: KeyframeAnimation;
    // private applyHeadRotation(state: CamelRenderState, yRot: number, xRot: number): void;
    setupAnim(state: CamelRenderState): void;
}