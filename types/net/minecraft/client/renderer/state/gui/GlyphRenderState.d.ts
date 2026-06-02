import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderable } from '../../../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { GuiElementRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { Matrix3x2fc } from '../../../../../../org/joml/Matrix3x2fc.d.ts'
export class GlyphRenderState extends Record implements GuiElementRenderState {
    constructor(pose: Matrix3x2fc, renderable: TextRenderable, scissorArea: ScreenRectangle)
    // private pose: Matrix3x2fc;
    // private renderable: TextRenderable;
    // private scissorArea: ScreenRectangle;
    bounds(): ScreenRectangle;
    buildVertices(vertexConsumer: VertexConsumer): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pipeline(): RenderPipeline;
    pose(): Matrix3x2fc;
    renderable(): TextRenderable;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
}