import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ArmedModel } from '../../../../../../net/minecraft/client/model/ArmedModel.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { AllayRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AllayRenderState.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class AllayModel extends EntityModel<AllayRenderState> implements ArmedModel<AllayRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private head: ModelPart;
    // private left_arm: ModelPart;
    // private left_wing: ModelPart;
    // private right_arm: ModelPart;
    // private right_wing: ModelPart;
    setupAnim(state: AllayRenderState): void;
    translateToHand(state: AllayRenderState, arm: HumanoidArm, poseStack: PoseStack): void;
}