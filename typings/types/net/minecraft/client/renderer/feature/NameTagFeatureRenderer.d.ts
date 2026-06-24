import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { NameTagFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/NameTagFeatureRenderer$Submit.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
export class NameTagFeatureRenderer extends RenderTypeFeatureRenderer<NameTagFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<NameTagFeatureRenderer$Submit>;
    constructor()
    // private lastId: number;
    buildGroup(context: FeatureFrameContext, submits: NameTagFeatureRenderer$Submit[]): void;
}