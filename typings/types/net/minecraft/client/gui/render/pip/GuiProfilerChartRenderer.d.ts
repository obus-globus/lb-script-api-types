import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { GuiProfilerChartRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/GuiProfilerChartRenderState.d.ts'
export class GuiProfilerChartRenderer extends PictureInPictureRenderer<GuiProfilerChartRenderState> {
    constructor()
    getRenderStateClass(): Class<GuiProfilerChartRenderState>;
    getTextureLabel(): string;
    getTranslateY(height: number, guiScale: number): number;
    renderToTexture(chartState: GuiProfilerChartRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector): void;
}