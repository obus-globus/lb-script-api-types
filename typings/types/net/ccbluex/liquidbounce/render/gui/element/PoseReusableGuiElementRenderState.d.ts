import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { GuiElementRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { Matrix3x2f } from '../../../../../../org/joml/Matrix3x2f.d.ts'
export interface PoseReusableGuiElementRenderState extends Object, GuiElementRenderState{
    bounds(): ScreenRectangle;
    buildVertices(vertexConsumer: VertexConsumer): void;
    pipeline(): RenderPipeline;
    pose(): Matrix3x2f;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
}