import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { QuadInstance } from '../../../../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VertexBufferWriter } from '../../../../../../../../net/caffeinemc/mods/sodium/api/vertex/buffer/VertexBufferWriter.d.ts'
import type { ModelQuadView } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
export class BakedModelEncoder extends Object {
    static writeQuadVertices(paramarg0: VertexBufferWriter, paramarg1: PoseStack$Pose, paramarg2: ModelQuadView, paramarg3: QuadInstance): void;
    constructor()
}