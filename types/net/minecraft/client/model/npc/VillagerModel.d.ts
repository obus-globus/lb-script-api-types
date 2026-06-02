import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { HeadedModel } from '../../../../../net/minecraft/client/model/HeadedModel.d.ts'
import type { VillagerLikeModel } from '../../../../../net/minecraft/client/model/VillagerLikeModel.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { MeshDefinition } from '../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { VillagerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/VillagerRenderState.d.ts'
export class VillagerModel extends EntityModel<VillagerRenderState> implements HeadedModel, VillagerLikeModel<VillagerRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyModel(): MeshDefinition;
    static createNoHatModel(): MeshDefinition;
    constructor(root: ModelPart)
    // private arms: ModelPart;
    readonly head: ModelPart;
    // private leftLeg: ModelPart;
    // private rightLeg: ModelPart;
    getHead(): ModelPart;
    setupAnim(state: VillagerRenderState): void;
    translateToArms(state: VillagerRenderState, outputPoseStack: PoseStack): void;
    translateToHead(poseStack: PoseStack): void;
}