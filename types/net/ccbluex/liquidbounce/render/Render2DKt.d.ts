import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Float2IntFunction } from '../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
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
    static copyPose(paramarg0: GuiGraphicsExtractor): Matrix3x2f;
    static copyPosePooled(paramarg0: GuiGraphicsExtractor): Matrix3x2f;
    static drawBlitOnCurrentLayer(paramarg0: GuiGraphicsExtractor, paramarg1: TextureSetup, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: RenderPipeline): void;
    static drawCircle(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: (param0: number) => kotlin.Int): void;
    static drawCustomElement(paramarg0: GuiGraphicsExtractor, paramarg1: RenderPipeline, paramarg2: TextureSetup, paramarg3: ScreenRectangle, paramarg4: ScreenRectangle, paramarg5: VerticesSetupHandler): void;
    static drawGlyphOnCurrentLayer(paramarg0: GuiGraphicsExtractor, paramarg1: TextureSetup, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: RenderPipeline): void;
    /**
     * Float version of {@link GuiGraphicsExtractor.drawHorizontalLine}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L255 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:255}
     */
    static drawHorizontalLine(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: Color4b): void;
    static drawLines(paramarg0: GuiGraphicsExtractor, paramarg1: number[], paramarg2: number, paramarg3: ScreenRectangle, paramarg4: boolean): void;
    static drawQuad(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: Color4b, paramarg6: Color4b): void;
    static drawQuadXYWH(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: Color4b, paramarg6: Color4b): void;
    static drawRoundedRect(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: Color4b, paramarg7: Color4b, paramarg8: number): void;
    static drawTexQuad(paramarg0: GuiGraphicsExtractor, paramarg1: TextureSetup, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: RenderPipeline): void;
    static drawTriangle(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: Color4b, paramarg8: Color4b, paramarg9: boolean): void;
    static drawTriangle(paramarg0: GuiGraphicsExtractor, paramarg1: Vec2, paramarg2: Vec2, paramarg3: Vec2, paramarg4: Color4b, paramarg5: Color4b): void;
    /**
     * Float version of {@link GuiGraphicsExtractor.drawVerticalLine}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L262 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:262}
     */
    static drawVerticalLine(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: Color4b): void;
    /**
     * @see net.minecraft.client.gui.render.state.ColoredRectangleRenderState.getBounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:81}
     */
    static getBounds(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): ScreenRectangle;
    static getBounds(paramarg0: GuiGraphicsExtractor, paramarg1: BoundingBox2f): ScreenRectangle;
    /**
     * @see net.minecraft.client.gui.render.state.ColoredRectangleRenderState.getBounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render2D.kt:89}
     */
    static getBoundsXYWH(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): ScreenRectangle;
    static withPush(paramarg0: GuiGraphicsExtractor$ScissorStack, paramarg1: ScreenRectangle, paramarg2: Function1<Object, void>): void;
    static withPush(paramarg0: Matrix3x2fStack, paramarg1: Function1<Object, void>): void;
}