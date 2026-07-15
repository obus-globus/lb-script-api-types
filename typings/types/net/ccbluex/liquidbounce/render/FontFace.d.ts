import type { Font } from '../../../../java/awt/Font.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FontId } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { FontRenderer } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
export class FontFace extends Object {
    constructor(name: string, size: number, file: File | null)
    // private cachedHash: number;
    // private cachedRenderer: FontRenderer | null;
    /**
     * The file of the font. If the font is a system font, this will be null.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:37}
     */
    readonly file: File | null;
    readonly filledStyles: FontId[];
    readonly name: string;
    readonly plainStyle: FontId;
    readonly renderer: FontRenderer;
    readonly size: number;
    // private styles: (FontId | null)[];
    equals(other: Object | null): boolean;
    fillDerivedStyles(baseFont: Font): void;
    /**
     * Fills the font style at the given index.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:84}
     */
    fillStyle(font: Font, style: number): void;
    /**
     * @see java.lang.String.hashCode
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:129}
     */
    hashCode(): number;
    style(style: number): FontId | null;
}