import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HorizontalAnchor } from '../../../../net/ccbluex/liquidbounce/render/engine/font/HorizontalAnchor.d.ts'
import type { VerticalAnchor } from '../../../../net/ccbluex/liquidbounce/render/engine/font/VerticalAnchor.d.ts'
/**
 * @param x Anchor X position
 * @param y Anchor Y position
 * @param z Z offset. {@link Float.NaN} for 2D rendering
 * @param horizontalAnchor Horizontal anchor of the text, null -> {@link HorizontalAnchor.START}
 * @param verticalAnchor Vertical anchor of the text, null -> {@link VerticalAnchor.TOP}
 * @param scale Render scale applied to width and height
 * @param shadow Draw shadow of text
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/render/AbstractFontRenderer.kt:105}
 */
export class AbstractFontRenderer$DrawParameters extends Object {
    static INSTANCE: AbstractFontRenderer$DrawParameters;
    static horizontalAnchor: HorizontalAnchor;
    static scale: number;
    static shadow: boolean;
    static verticalAnchor: VerticalAnchor;
    static x: number;
    static y: number;
    static z: number;
    static reset2D(): void;
    static reset3D(): void;
    horizontalAnchor: HorizontalAnchor | null;
    scale: number;
    shadow: boolean;
    verticalAnchor: VerticalAnchor | null;
    x: number;
    y: number;
    z: number;
    reset2D(): void;
    reset3D(): void;
}