import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { GuiBookModelRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/GuiBookModelRenderState.d.ts'
export class GuiBookModelRenderer extends PictureInPictureRenderer<GuiBookModelRenderState> {
    constructor()
    getRenderStateClass(): Class<GuiBookModelRenderState>;
    getTextureLabel(): string;
    getTranslateY(height: number, guiScale: number): number;
    renderToTexture(bookModelState: GuiBookModelRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector): void;
}