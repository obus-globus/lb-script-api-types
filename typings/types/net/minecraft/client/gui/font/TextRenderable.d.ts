import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export interface TextRenderable extends Object{
    bottom(): number;
    guiPipeline(): RenderPipeline;
    left(): number;
    render(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    renderType(displayMode: Font$DisplayMode): RenderType;
    right(): number;
    textureView(): GpuTextureView;
    top(): number;
}