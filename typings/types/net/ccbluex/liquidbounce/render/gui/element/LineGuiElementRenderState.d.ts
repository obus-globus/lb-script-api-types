import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PoseReusableGuiElementRenderState } from '../../../../../../net/ccbluex/liquidbounce/render/gui/element/PoseReusableGuiElementRenderState.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { Vec2 } from '../../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Matrix3x2f } from '../../../../../../org/joml/Matrix3x2f.d.ts'
export class LineGuiElementRenderState extends Record implements PoseReusableGuiElementRenderState {
    constructor(arg0: Vec2[], arg1: number, arg2: Matrix3x2f, arg3: RenderPipeline, arg4: ScreenRectangle, arg5: ScreenRectangle)
    constructor(points: number[], argb: number, pipeline: RenderPipeline, pose: Matrix3x2f, scissorArea: ScreenRectangle, bounds: ScreenRectangle)
    // private argb: number;
    // private bounds: ScreenRectangle;
    // private pipeline: RenderPipeline;
    // private points: number[];
    // private pose: Matrix3x2f;
    // private scissorArea: ScreenRectangle;
    argb(): number;
    bounds(): ScreenRectangle;
    buildVertices(arg0: VertexConsumer): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pipeline(): RenderPipeline;
    points(): number[];
    pose(): Matrix3x2f;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
}