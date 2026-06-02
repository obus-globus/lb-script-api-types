import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ArmedModel } from '../../../../../../net/minecraft/client/model/ArmedModel.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { HeadedModel } from '../../../../../../net/minecraft/client/model/HeadedModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { IllagerRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/IllagerRenderState.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class IllagerModel<S extends IllagerRenderState> extends EntityModel<S> implements ArmedModel<S>, HeadedModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private arms: ModelPart;
    readonly hat: ModelPart;
    readonly head: ModelPart;
    // private leftArm: ModelPart;
    // private leftLeg: ModelPart;
    // private rightArm: ModelPart;
    // private rightLeg: ModelPart;
    // private getArm(arm: HumanoidArm): ModelPart;
    getHat(): ModelPart;
    getHead(): ModelPart;
    setupAnim(state: S): void;
    translateToHand(state: IllagerRenderState, arm: HumanoidArm, poseStack: PoseStack): void;
    translateToHead(poseStack: PoseStack): void;
}