import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PoseReusableGuiElementRenderState } from '../../../../../../net/ccbluex/liquidbounce/render/gui/element/PoseReusableGuiElementRenderState.d.ts'
import type { VerticesSetupHandler } from '../../../../../../net/ccbluex/liquidbounce/utils/render/VerticesSetupHandler.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { Matrix3x2f } from '../../../../../../org/joml/Matrix3x2f.d.ts'
export class LambdaSimpleGuiElementRenderState extends Record implements PoseReusableGuiElementRenderState {
    constructor(pipeline: RenderPipeline, textureSetup: TextureSetup, pose: Matrix3x2f, scissorArea: ScreenRectangle, bounds: ScreenRectangle, verticesSetupHandler: VerticesSetupHandler)
    // private bounds: ScreenRectangle;
    // private pipeline: RenderPipeline;
    // private pose: Matrix3x2f;
    // private scissorArea: ScreenRectangle;
    // private textureSetup: TextureSetup;
    // private verticesSetupHandler: VerticesSetupHandler;
    bounds(): ScreenRectangle;
    buildVertices(arg0: VertexConsumer): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pipeline(): RenderPipeline;
    pose(): Matrix3x2f;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
    verticesSetupHandler(): VerticesSetupHandler;
}