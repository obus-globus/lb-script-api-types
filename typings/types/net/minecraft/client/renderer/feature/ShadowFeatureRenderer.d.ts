import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
import type { ShadowFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/ShadowFeatureRenderer$Submit.d.ts'
export class ShadowFeatureRenderer extends RenderTypeFeatureRenderer<ShadowFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<ShadowFeatureRenderer$Submit>;
    constructor()
    buildGroup(context: FeatureFrameContext, submits: ShadowFeatureRenderer$Submit[]): void;
    // private prepare(submit: ShadowFeatureRenderer$Submit, builder: VertexConsumer): void;
}