import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { BlockModelFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/BlockModelFeatureRenderer$Submit.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
export class BlockModelFeatureRenderer extends RenderTypeFeatureRenderer<BlockModelFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<BlockModelFeatureRenderer$Submit>;
    constructor()
    // private quadInstance: QuadInstance;
    buildGroup(context: FeatureFrameContext, submits: BlockModelFeatureRenderer$Submit[]): void;
}