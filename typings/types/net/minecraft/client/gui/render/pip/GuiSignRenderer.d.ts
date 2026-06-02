import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { GuiSignRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/GuiSignRenderState.d.ts'
import type { SpriteGetter } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
export class GuiSignRenderer extends PictureInPictureRenderer<GuiSignRenderState> {
    constructor(bufferSource: MultiBufferSource$BufferSource, sprites: SpriteGetter)
    // private sprites: SpriteGetter;
    getRenderStateClass(): Class<GuiSignRenderState>;
    getTextureLabel(): string;
    renderToTexture(renderState: GuiSignRenderState, poseStack: PoseStack): void;
}