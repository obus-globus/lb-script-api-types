import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
import type { TextFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/TextFeatureRenderer$Submit.d.ts'
export class TextFeatureRenderer extends RenderTypeFeatureRenderer<TextFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<TextFeatureRenderer$Submit>;
    constructor()
    // private hasBE: boolean;
    buildGroup(context: FeatureFrameContext, submits: TextFeatureRenderer$Submit[]): void;
}