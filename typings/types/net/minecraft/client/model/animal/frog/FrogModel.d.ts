import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { FrogRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FrogRenderState.d.ts'
export class FrogModel extends EntityModel<FrogRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private croakAnimation: KeyframeAnimation;
    // private croakingBody: ModelPart;
    // private eyes: ModelPart;
    // private head: ModelPart;
    // private idleWaterAnimation: KeyframeAnimation;
    // private jumpAnimation: KeyframeAnimation;
    // private leftArm: ModelPart;
    // private leftLeg: ModelPart;
    // private rightArm: ModelPart;
    // private rightLeg: ModelPart;
    // private swimAnimation: KeyframeAnimation;
    // private tongue: ModelPart;
    // private tongueAnimation: KeyframeAnimation;
    // private walkAnimation: KeyframeAnimation;
    setupAnim(state: FrogRenderState): void;
}