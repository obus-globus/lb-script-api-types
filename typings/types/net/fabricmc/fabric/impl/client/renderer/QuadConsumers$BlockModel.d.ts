import type { PoseStack$Pose } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableQuadView } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { BlockModelBufferCache } from '../../../../../../net/fabricmc/fabric/impl/client/renderer/BlockModelBufferCache.d.ts'
import type { ChunkSectionLayer } from '../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class QuadConsumers$BlockModel extends Object implements Consumer<MutableQuadView> {
    constructor()
    bufferCache: BlockModelBufferCache;
    lightCoords: number;
    overlayCoords: number;
    pose: PoseStack$Pose;
    renderTypeFunction: (param0: ChunkSectionLayer) => RenderType;
    tintLayers: number[];
    accept(arg0: MutableQuadView): void;
    andThen(arg0: (param0: MutableQuadView) => void): (param0: MutableQuadView) => void;
}