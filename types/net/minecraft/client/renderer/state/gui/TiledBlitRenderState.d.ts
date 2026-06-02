import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { GuiElementRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { Matrix3x2f } from '../../../../../../org/joml/Matrix3x2f.d.ts'
export class TiledBlitRenderState extends Record implements GuiElementRenderState {
    // private bounds: ScreenRectangle;
    // private color: number;
    // private pipeline: RenderPipeline;
    // private pose: Matrix3x2f;
    // private scissorArea: ScreenRectangle;
    // private textureSetup: TextureSetup;
    // private tileHeight: number;
    // private tileWidth: number;
    // private u0: number;
    // private u1: number;
    // private v0: number;
    // private v1: number;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bounds(): ScreenRectangle;
    buildVertices(vertexConsumer: VertexConsumer): void;
    color(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pipeline(): RenderPipeline;
    pose(): Matrix3x2f;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    tileHeight(): number;
    tileWidth(): number;
    toString(): string;
    u0(): number;
    u1(): number;
    v0(): number;
    v1(): number;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}