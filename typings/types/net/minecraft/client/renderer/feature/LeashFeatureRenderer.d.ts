import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { LeashFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/LeashFeatureRenderer$Submit.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
export class LeashFeatureRenderer extends RenderTypeFeatureRenderer<LeashFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<LeashFeatureRenderer$Submit>;
    constructor()
    buildGroup(context: FeatureFrameContext, submits: LeashFeatureRenderer$Submit[]): void;
    // private prepare(submit: LeashFeatureRenderer$Submit): void;
}