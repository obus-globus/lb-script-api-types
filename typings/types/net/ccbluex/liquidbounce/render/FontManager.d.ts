import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FontFace } from '../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontGlyphPageManager } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyphPageManager.d.ts'
import type { FontRenderer } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
export class FontManager extends Object {
    /**
     * Since our font renderer does not support dynamic font size changes,
     * we will use 43 as the default font size.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:97}
     */
    static DEFAULT_FONT_SIZE: number;
    static INSTANCE: FontManager;
    // private CJK_FONT: FontFace | null;
    // private /*not mapped: */ getCJK_FONT(): FontFace | null;
    // private COMMON_FONT: FontFace;
    // private /*not mapped: */ getCOMMON_FONT(): FontFace;
    DEFAULT_FONT_SIZE: number;
    /**
     * The active font renderer that all text rendering will be based on.
     *
     * TODO: Replaces this with Module-based Font Selection
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:89}
     */
    readonly FONT_RENDERER: FontRenderer;
    // private STYLES: number[];
    // private _glyphManager: FontGlyphPageManager | null;
    // private fontFaces: { [key: string]: FontFace };
    /*not mapped: */ getFontFaces$liquidbounce(): { [key: string]: FontFace };
    /**
     * The glyph manager that is responsible for managing the glyph pages.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:104}
     */
    readonly glyphManager: FontGlyphPageManager;
    // private logger: Logger;
    // private addFontFace(fontFace: FontFace): void;
    createGlyphManager(): void;
    /**
     * Returns the font by the given name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L110 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:110}
     */
    fontFace(name: string): FontFace | null;
    queueFontFromFile(file: File): void;
    queueFontFromStream(stream: InputStream): void;
    // private systemFont(name: string): FontFace;
}