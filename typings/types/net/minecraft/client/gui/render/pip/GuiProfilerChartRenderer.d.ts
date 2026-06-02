import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { GuiProfilerChartRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/GuiProfilerChartRenderState.d.ts'
export class GuiProfilerChartRenderer extends PictureInPictureRenderer<GuiProfilerChartRenderState> {
    constructor(bufferSource: MultiBufferSource$BufferSource)
    getRenderStateClass(): Class<GuiProfilerChartRenderState>;
    getTextureLabel(): string;
    getTranslateY(height: number, guiScale: number): number;
    renderToTexture(chartState: GuiProfilerChartRenderState, poseStack: PoseStack): void;
}