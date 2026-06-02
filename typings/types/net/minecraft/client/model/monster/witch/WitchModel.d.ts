import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { HeadedModel } from '../../../../../../net/minecraft/client/model/HeadedModel.d.ts'
import type { VillagerLikeModel } from '../../../../../../net/minecraft/client/model/VillagerLikeModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { WitchRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WitchRenderState.d.ts'
export class WitchModel extends EntityModel<WitchRenderState> implements HeadedModel, VillagerLikeModel<WitchRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private arms: ModelPart;
    readonly head: ModelPart;
    // private leftLeg: ModelPart;
    readonly nose: ModelPart;
    // private rightLeg: ModelPart;
    getHead(): ModelPart;
    getNose(): ModelPart;
    setupAnim(state: WitchRenderState): void;
    translateToArms(state: WitchRenderState, outputPoseStack: PoseStack): void;
    translateToHead(poseStack: PoseStack): void;
}