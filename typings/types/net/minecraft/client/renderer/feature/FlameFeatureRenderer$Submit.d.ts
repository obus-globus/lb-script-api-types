import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { Quaternionf } from '../../../../../org/joml/Quaternionf.d.ts'
export class FlameFeatureRenderer$Submit extends Record implements SubmitNode {
    constructor(pose: PoseStack$Pose, entityRenderState: EntityRenderState, rotation: Quaternionf)
    // private entityRenderState: EntityRenderState;
    // private pose: PoseStack$Pose;
    // private rotation: Quaternionf;
    entityRenderState(): EntityRenderState;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<FlameFeatureRenderer$Submit>;
    hashCode(): number;
    pose(): PoseStack$Pose;
    rotation(): Quaternionf;
    toString(): string;
}