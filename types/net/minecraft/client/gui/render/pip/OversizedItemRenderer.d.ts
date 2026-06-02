import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { GuiRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState.d.ts'
import type { OversizedItemRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/OversizedItemRenderState.d.ts'
export class OversizedItemRenderer extends PictureInPictureRenderer<OversizedItemRenderState> {
    constructor(bufferSource: MultiBufferSource$BufferSource)
    // private modelOnTextureIdentity: Object;
    // private usedOnThisFrame: boolean;
    blitTexture(renderState: OversizedItemRenderState, guiRenderState: GuiRenderState): void;
    getRenderStateClass(): Class<OversizedItemRenderState>;
    getTextureLabel(): string;
    getTranslateY(height: number, guiScale: number): number;
    invalidateTexture(): void;
    renderToTexture(renderState: OversizedItemRenderState, poseStack: PoseStack): void;
    resetUsedOnThisFrame(): void;
    textureIsReadyToBlit(renderState: OversizedItemRenderState): boolean;
    usedOnThisFrame(): boolean;
}