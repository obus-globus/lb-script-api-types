import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelPart$Cube } from '../../../../../net/minecraft/client/model/geom/ModelPart$Cube.d.ts'
export interface ModelPart$Visitor extends Object{
    visit(pose: PoseStack$Pose, partPath: string, cubeIndex: number, cube: ModelPart$Cube): void;
}