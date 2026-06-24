import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ShapeOutlineFeatureRenderer$Submit extends Record implements SubmitNode {
    constructor(pose: PoseStack$Pose, shape: VoxelShape, renderType: RenderType, color: number, width: number)
    // private color: number;
    // private pose: PoseStack$Pose;
    // private renderType: RenderType;
    // private shape: VoxelShape;
    // private width: number;
    color(): number;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<ShapeOutlineFeatureRenderer$Submit>;
    hashCode(): number;
    pose(): PoseStack$Pose;
    renderType(): RenderType;
    shape(): VoxelShape;
    toString(): string;
    width(): number;
}