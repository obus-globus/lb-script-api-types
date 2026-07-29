import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Float2IntFunction } from '../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BoundingBox2f } from '../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { VerticesSetupHandler } from '../../../../net/ccbluex/liquidbounce/utils/render/VerticesSetupHandler.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GuiGraphicsExtractor$ScissorStack } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor$ScissorStack.d.ts'
import type { ScreenRectangle } from '../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Matrix3x2f } from '../../../../org/joml/Matrix3x2f.d.ts'
import type { Matrix3x2fStack } from '../../../../org/joml/Matrix3x2fStack.d.ts'
export class Render2DKt extends Object {
    static copyPose(self: GuiGraphicsExtractor): Matrix3x2f;
    static copyPosePooled(self: GuiGraphicsExtractor): Matrix3x2f;
    static drawBlitOnCurrentLayer(self: GuiGraphicsExtractor, textureSetup: TextureSetup, x0: number, y0: number, x1: number, y1: number, u1: number, v1: number, u2: number, v2: number, argb: number, pipeline: RenderPipeline): void;
    static drawCircle(self: GuiGraphicsExtractor, x: number, y: number, radius: number, innerRadius: number, colorGetter: (param0: number) => number): void;
    static drawCustomElement(self: GuiGraphicsExtractor, pipeline: RenderPipeline, textureSetup: TextureSetup, scissorArea: ScreenRectangle | null, bounds: ScreenRectangle | null, verticesSetupHandler: VerticesSetupHandler): void;
    static drawGlyphOnCurrentLayer(self: GuiGraphicsExtractor, textureSetup: TextureSetup, x0: number, y0: number, x1: number, y1: number, u1: number, v1: number, u2: number, v2: number, argb: number, pipeline: RenderPipeline): void;
    /**
     * Float version of {@link GuiGraphicsExtractor.drawHorizontalLine}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L259 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:259}
     */
    static drawHorizontalLine(self: GuiGraphicsExtractor, x1: number, x2: number, y: number, thickness: number, color: Color4b): void;
    static drawLines(self: GuiGraphicsExtractor, points: number[], argb: number, bounds: ScreenRectangle, cull: boolean): void;
    static drawQuad(self: GuiGraphicsExtractor, x1: number, y1: number, x2: number, y2: number, fillColor: Color4b | null, outlineColor: Color4b | null): void;
    static drawQuadXYWH(self: GuiGraphicsExtractor, x: number, y: number, w: number, h: number, fillColor: Color4b | null, outlineColor: Color4b | null): void;
    static drawRoundedRect(self: GuiGraphicsExtractor, x1: number, y1: number, x2: number, y2: number, radius: number, fillColor: Color4b | null, outlineColor: Color4b | null, outlineWidth: number): void;
    static drawTexQuad(self: GuiGraphicsExtractor, textureSetup: TextureSetup, x0: number, y0: number, x1: number, y1: number, u1: number, v1: number, u2: number, v2: number, argb: number, pipeline: RenderPipeline): void;
    static drawTriangle(self: GuiGraphicsExtractor, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, fillColor: Color4b | null, outlineColor: Color4b | null, cull: boolean): void;
    static drawTriangle(self: GuiGraphicsExtractor, p1: Vec2, p2: Vec2, p3: Vec2, fillColor: Color4b | null, outlineColor: Color4b | null): void;
    /**
     * Float version of {@link GuiGraphicsExtractor.drawVerticalLine}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L266 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:266}
     */
    static drawVerticalLine(self: GuiGraphicsExtractor, x: number, y1: number, y2: number, thickness: number, color: Color4b): void;
    /**
     * @see net.minecraft.client.renderer.state.gui.ColoredRectangleRenderState.getBounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:84}
     */
    static getBounds(self: GuiGraphicsExtractor, left: number, top: number, right: number, bottom: number): ScreenRectangle;
    static getBounds(self: GuiGraphicsExtractor, box: BoundingBox2f): ScreenRectangle;
    /**
     * @see net.minecraft.client.renderer.state.gui.ColoredRectangleRenderState.getBounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:92}
     */
    static getBoundsXYWH(self: GuiGraphicsExtractor, x: number, y: number, w: number, h: number): ScreenRectangle;
    static withPush(self: GuiGraphicsExtractor$ScissorStack, rect: ScreenRectangle, block: (param0: GuiGraphicsExtractor$ScissorStack) => void): void;
    static withPush(self: Matrix3x2fStack, block: (param0: Matrix3x2fStack) => void): void;
}