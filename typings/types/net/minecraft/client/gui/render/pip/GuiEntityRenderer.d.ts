import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderDispatcher } from '../../../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { GuiEntityRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/GuiEntityRenderState.d.ts'
export class GuiEntityRenderer extends PictureInPictureRenderer<GuiEntityRenderState> {
    constructor(entityRenderDispatcher: EntityRenderDispatcher)
    // private entityRenderDispatcher: EntityRenderDispatcher;
    getRenderStateClass(): Class<GuiEntityRenderState>;
    getTextureLabel(): string;
    getTranslateY(height: number, guiScale: number): number;
    renderToTexture(entityState: GuiEntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector): void;
}