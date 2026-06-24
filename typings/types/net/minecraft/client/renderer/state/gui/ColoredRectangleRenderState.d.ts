import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { GuiElementRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { Matrix3x2fc } from '../../../../../../org/joml/Matrix3x2fc.d.ts'
export class ColoredRectangleRenderState extends Record implements GuiElementRenderState {
    constructor(pipeline: RenderPipeline, textureSetup: TextureSetup, pose: Matrix3x2fc, x0: number, y0: number, x1: number, y1: number, col1: number, col2: number, scissorArea: ScreenRectangle)
    constructor(pipeline: RenderPipeline, textureSetup: TextureSetup, pose: Matrix3x2fc, x0: number, y0: number, x1: number, y1: number, col1: number, col2: number, scissorArea: ScreenRectangle, bounds: ScreenRectangle)
    // private bounds: ScreenRectangle;
    // private col1: number;
    // private col2: number;
    // private pipeline: RenderPipeline;
    // private pose: Matrix3x2fc;
    // private scissorArea: ScreenRectangle;
    // private textureSetup: TextureSetup;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bounds(): ScreenRectangle;
    buildVertices(vertexConsumer: VertexConsumer): void;
    col1(): number;
    col2(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pipeline(): RenderPipeline;
    pose(): Matrix3x2fc;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}