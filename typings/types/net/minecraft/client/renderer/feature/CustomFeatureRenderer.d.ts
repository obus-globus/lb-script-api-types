import type { CustomFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/CustomFeatureRenderer$Submit.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
export class CustomFeatureRenderer extends RenderTypeFeatureRenderer<CustomFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<CustomFeatureRenderer$Submit>;
    constructor()
    buildGroup(context: FeatureFrameContext, submits: CustomFeatureRenderer$Submit[]): void;
}