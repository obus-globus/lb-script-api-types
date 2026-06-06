import type { Font } from '../../../../java/awt/Font.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FontId } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { FontRenderer } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
export class FontFace extends Object {
    constructor(name: string, size: number, file: File | null)
    // private cachedHash: number;
    /**
     * The file of the font. If the font is a system font, this will be null.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:34}
     */
    readonly file: File | null;
    readonly filledStyles: FontId[];
    readonly name: string;
    readonly plainStyle: FontId;
    readonly renderer: FontRenderer;
    readonly size: number;
    // private styles: (FontId | null)[];
    equals(other: Object | null): boolean;
    /**
     * Fills the font style at the given index.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:69}
     */
    fillStyle(font: Font, style: number): void;
    /**
     * @see java.lang.String.hashCode
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L99 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:99}
     */
    hashCode(): number;
    style(style: number): FontId | null;
}