import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { TextRenderable$Styled } from '../../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export interface PlainTextRenderable extends Object, TextRenderable$Styled{
    activeBottom(): number;
    activeLeft(): number;
    activeRight(): number;
    activeTop(): number;
    ascent(): number;
    bottom(): number;
    color(): number;
    guiPipeline(): RenderPipeline;
    height(): number;
    left(): number;
    render(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    renderSprite(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, offsetX: number, offsetY: number, z: number, color: number): void;
    renderType(displayMode: Font$DisplayMode): RenderType;
    right(): number;
    shadowColor(): number;
    shadowOffset(): number;
    style(): Style;
    textureView(): GpuTextureView;
    top(): number;
    width(): number;
    x(): number;
    y(): number;
}