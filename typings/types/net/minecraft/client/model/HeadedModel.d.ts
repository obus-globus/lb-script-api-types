import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
export interface HeadedModel extends Object{
    getHead(): ModelPart;
    translateToHead(poseStack: PoseStack): void;
}