import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SubmitNodeCollector$CustomGeometryRenderer extends Object{
    render(pose: PoseStack$Pose, buffer: VertexConsumer): void;
}