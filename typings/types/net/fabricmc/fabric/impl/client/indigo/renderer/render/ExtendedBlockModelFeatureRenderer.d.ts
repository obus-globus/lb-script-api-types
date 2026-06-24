import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { QuadInstance } from '../../../../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { ExtendedBlockModelSubmit } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/submit/ExtendedBlockModelSubmit.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/MutableQuadViewImpl.d.ts'
import type { ExtendedBlockModelFeatureRenderer$BufferCache } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/render/ExtendedBlockModelFeatureRenderer$BufferCache.d.ts'
import type { BlockStateModelPart } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { FeatureFrameContext } from '../../../../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
export class ExtendedBlockModelFeatureRenderer extends RenderTypeFeatureRenderer<ExtendedBlockModelSubmit> {
    constructor()
    // private bufferCache: ExtendedBlockModelFeatureRenderer$BufferCache;
    // private emitter: MutableQuadViewImpl;
    // private quadInstance: QuadInstance;
    // private submit: ExtendedBlockModelSubmit;
    // private bufferQuad(arg0: MutableQuadViewImpl): void;
    buildGroup(arg0: FeatureFrameContext, arg1: ExtendedBlockModelSubmit[]): void;
    // private putPartQuads(arg0: BlockStateModelPart, arg1: PoseStack$Pose, arg2: QuadInstance, arg3: number, arg4: number[], arg5: ExtendedBlockModelFeatureRenderer$BufferCache): void;
}