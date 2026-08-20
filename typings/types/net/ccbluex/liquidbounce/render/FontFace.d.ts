import type { Font } from '../../../../java/awt/Font.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { FontId } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { FontRenderer } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
export class FontFace extends Object {
    constructor(name: string, size: number, file: File | null)
    // private cachedHash: number;
    // private cachedRenderer: FontRenderer | null;
    /**
     * The file of the font. If the font is a system font, this will be null.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:38}
     */
    readonly file: File | null;
    readonly filledStyles: FontId[];
    readonly name: string;
    readonly plainStyle: FontId;
    readonly renderer: FontRenderer;
    readonly size: number;
    // private styles: (FontId | null)[];
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fillDerivedStyles(baseFont: Font, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fillStyle(font: Font, style: number, $completion: Continuation<void>): any;
    /**
     * @see java.lang.String.hashCode
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontFace.kt:132}
     */
    hashCode(): number;
    style(style: number): FontId | null;
}