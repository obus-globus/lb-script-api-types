import type { AnimationDefinition } from '../../../../../../net/minecraft/client/animation/AnimationDefinition.d.ts'
import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { ArmadilloRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmadilloRenderState.d.ts'
export abstract class ArmadilloModel extends EntityModel<ArmadilloRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart, walk: AnimationDefinition, rollOut: AnimationDefinition, rollUp: AnimationDefinition, peek: AnimationDefinition)
    // private body: ModelPart;
    // private cube: ModelPart;
    // private head: ModelPart;
    // private leftHindLeg: ModelPart;
    // private peekAnimation: KeyframeAnimation;
    // private rightHindLeg: ModelPart;
    // private rollOutAnimation: KeyframeAnimation;
    // private rollUpAnimation: KeyframeAnimation;
    // private tail: ModelPart;
    // private walkAnimation: KeyframeAnimation;
    setupAnim(state: ArmadilloRenderState): void;
}