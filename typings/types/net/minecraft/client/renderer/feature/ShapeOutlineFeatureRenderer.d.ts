import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
import type { ShapeOutlineFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/ShapeOutlineFeatureRenderer$Submit.d.ts'
export class ShapeOutlineFeatureRenderer extends RenderTypeFeatureRenderer<ShapeOutlineFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<ShapeOutlineFeatureRenderer$Submit>;
    constructor()
    buildGroup(context: FeatureFrameContext, submits: ShapeOutlineFeatureRenderer$Submit[]): void;
}