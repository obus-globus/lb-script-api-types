import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export interface VillagerLikeModel<T extends EntityRenderState> extends Object{
    translateToArms(state: T, outputPoseStack: PoseStack): void;
}