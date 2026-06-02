import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ArmedModel } from '../../../../../../net/minecraft/client/model/ArmedModel.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { VexRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/VexRenderState.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class VexModel extends EntityModel<VexRenderState> implements ArmedModel<VexRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private head: ModelPart;
    // private leftArm: ModelPart;
    // private leftWing: ModelPart;
    // private rightArm: ModelPart;
    // private rightWing: ModelPart;
    // private offsetStackPosition(poseStack: PoseStack, mainArm: boolean): void;
    // private setArmsCharging(hasItemInRightHand: boolean, hasItemInLeftHand: boolean, movingArmZBob: number): void;
    setupAnim(state: VexRenderState): void;
    translateToHand(state: VexRenderState, arm: HumanoidArm, poseStack: PoseStack): void;
}