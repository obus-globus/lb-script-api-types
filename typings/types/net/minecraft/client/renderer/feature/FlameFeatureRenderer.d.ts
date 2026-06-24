import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { FlameFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/FlameFeatureRenderer$Submit.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class FlameFeatureRenderer extends RenderTypeFeatureRenderer<FlameFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<FlameFeatureRenderer$Submit>;
    constructor()
    buildGroup(context: FeatureFrameContext, submits: FlameFeatureRenderer$Submit[]): void;
    // private prepare(submit: FlameFeatureRenderer$Submit, buffer: VertexConsumer, fire1: TextureAtlasSprite, fire2: TextureAtlasSprite): void;
}