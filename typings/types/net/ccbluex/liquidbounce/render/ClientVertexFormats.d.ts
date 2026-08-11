import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientVertexFormats extends Object {
    /**
     * Vertex format for gradient circle shader.
     *
     * - UV0: Quad-local UV (0..1). Shader remaps this to [-1,1] to evaluate circle SDF.
     * - OuterColor: Packed outer ring RG/BA channels in UV1.x/UV1.y.
     * - InnerColor: Packed inner ring RG/BA channels in UV2.x/UV2.y.
     * - InnerRatio: Inner radius ratio in [0,1] (innerRadius / outerRadius).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientVertexFormats.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientVertexFormats.kt:79}
     */
    static GRADIENT_CIRCLE: VertexFormat;
    /**
     * Vertex format for GUI circle LUT shader.
     *
     * - UV0: Quad-local UV (0..1). Shader remaps this to [-1,1] to evaluate circle SDF.
     * - UV2.x: LUT row index in {@link net.ccbluex.liquidbounce.render.gui.GuiCircleLutAtlas}.
     * - UV2.y: Encoded inner radius ratio (0..32767 => 0..1).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientVertexFormats.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientVertexFormats.kt:64}
     */
    static GUI_CIRCLE_LUT: VertexFormat;
    /**
     * Vertex format for GUI rounded rectangle shader.
     *
     * - UV0: Quad-local UV (0..1). Shader maps this into rect-local coordinates for SDF evaluation.
     * - Color: Fill or outline color.
     * - Size: Rect width/height encoded in UV1.x/UV1.y.
     * - Parameters: Corner radius encoded in UV2.x. UV2.y is reserved for future flags.
     * - StrokeWidth: Outline width in rect-local GUI units. 0 means fill.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientVertexFormats.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientVertexFormats.kt:47}
     */
    static GUI_ROUNDED_RECT: VertexFormat;
    static INSTANCE: ClientVertexFormats;
    GRADIENT_CIRCLE: VertexFormat;
    GUI_CIRCLE_LUT: VertexFormat;
    GUI_ROUNDED_RECT: VertexFormat;
}