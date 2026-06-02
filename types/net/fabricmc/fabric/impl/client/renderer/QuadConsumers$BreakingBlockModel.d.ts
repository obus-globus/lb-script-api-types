import type { PoseStack$Pose } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableQuadView } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
export class QuadConsumers$BreakingBlockModel extends Object implements Consumer<MutableQuadView> {
    constructor()
    buffer: VertexConsumer;
    pose: PoseStack$Pose;
    accept(arg0: MutableQuadView): void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
}