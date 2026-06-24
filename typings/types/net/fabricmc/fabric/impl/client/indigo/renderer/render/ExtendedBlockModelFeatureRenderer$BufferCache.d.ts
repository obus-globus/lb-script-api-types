import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ExtendedBlockModelFeatureRenderer } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/render/ExtendedBlockModelFeatureRenderer.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { RenderType } from '../../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ExtendedBlockModelFeatureRenderer$BufferCache extends Object {
    private constructor(null_: ExtendedBlockModelFeatureRenderer)
    // private lastBuffer: VertexConsumer;
    // private lastLayer: ChunkSectionLayer;
    // private renderTypeFunction: (param0: ChunkSectionLayer) => RenderType;
    // private sheetedDecalPose: PoseStack$Pose;
    clear(): void;
    getBuffer(arg0: ChunkSectionLayer): VertexConsumer;
    prepare(arg0: (param0: ChunkSectionLayer) => RenderType, arg1: PoseStack$Pose): void;
}