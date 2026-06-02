import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { ArmedModel } from '../../../../../../net/minecraft/client/model/ArmedModel.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { HeadedModel } from '../../../../../../net/minecraft/client/model/HeadedModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { CopperGolemRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CopperGolemRenderState.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class CopperGolemModel extends EntityModel<CopperGolemRenderState> implements ArmedModel<CopperGolemRenderState>, HeadedModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createEyesLayer(): LayerDefinition;
    static createRunningPoseBodyLayer(): LayerDefinition;
    static createSittingPoseBodyLayer(): LayerDefinition;
    static createStarPoseBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    readonly head: ModelPart;
    // private idleAnimation: KeyframeAnimation;
    // private interactionDropItem: KeyframeAnimation;
    // private interactionDropNoItem: KeyframeAnimation;
    // private interactionGetItem: KeyframeAnimation;
    // private interactionGetNoItem: KeyframeAnimation;
    // private leftArm: ModelPart;
    // private rightArm: ModelPart;
    // private walkAnimation: KeyframeAnimation;
    // private walkWithItemAnimation: KeyframeAnimation;
    applyBlockOnAntennaTransform(poseStack: PoseStack): void;
    getHead(): ModelPart;
    // private poseHeldItemArmsIfStill(): void;
    setupAnim(state: CopperGolemRenderState): void;
    translateToHand(state: CopperGolemRenderState, arm: HumanoidArm, poseStack: PoseStack): void;
    translateToHead(poseStack: PoseStack): void;
    translateToHead(poseStack: PoseStack): void;
}