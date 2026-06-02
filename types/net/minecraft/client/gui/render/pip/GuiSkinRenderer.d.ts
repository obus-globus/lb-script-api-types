import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { GuiSkinRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/GuiSkinRenderState.d.ts'
export class GuiSkinRenderer extends PictureInPictureRenderer<GuiSkinRenderState> {
    constructor(bufferSource: MultiBufferSource$BufferSource)
    getRenderStateClass(): Class<GuiSkinRenderState>;
    getTextureLabel(): string;
    renderToTexture(skinState: GuiSkinRenderState, modelStack: PoseStack): void;
}