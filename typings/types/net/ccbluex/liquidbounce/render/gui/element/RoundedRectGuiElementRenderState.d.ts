import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PoseReusableGuiElementRenderState } from '../../../../../../net/ccbluex/liquidbounce/render/gui/element/PoseReusableGuiElementRenderState.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { Matrix3x2f } from '../../../../../../org/joml/Matrix3x2f.d.ts'
export class RoundedRectGuiElementRenderState extends Record implements PoseReusableGuiElementRenderState {
    constructor(x0: number, y0: number, x1: number, y1: number, radius: number, fillColor: number, outlineColor: number, outlineWidth: number, pose: Matrix3x2f, scissorArea: ScreenRectangle, bounds: ScreenRectangle)
    // private bounds: ScreenRectangle;
    // private fillColor: number;
    // private outlineColor: number;
    // private outlineWidth: number;
    // private pose: Matrix3x2f;
    // private radius: number;
    // private scissorArea: ScreenRectangle;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bounds(): ScreenRectangle;
    buildVertices(arg0: VertexConsumer): void;
    // private emitQuad(arg0: VertexConsumer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    equals(arg0: Object | null): boolean;
    fillColor(): number;
    hashCode(): number;
    outlineColor(): number;
    outlineWidth(): number;
    pipeline(): RenderPipeline;
    pose(): Matrix3x2f;
    radius(): number;
    recycle(): void;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}