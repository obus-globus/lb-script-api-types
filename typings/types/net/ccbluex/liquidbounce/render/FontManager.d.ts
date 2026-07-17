import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { FontFace } from '../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontGlyphPageManager } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyphPageManager.d.ts'
import type { FontRenderer } from '../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
export class FontManager extends Object {
    /**
     * Since our font renderer does not support dynamic font size changes,
     * we will use 43 as the default font size.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:106}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L99 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:99}
     */
    readonly FONT_RENDERER: FontRenderer;
    // private STYLES: number[];
    // private _glyphManager: FontGlyphPageManager | null;
    // private fontFaces: { [key: string]: FontFace };
    /*not mapped: */ getFontFaces$net_ccbluex_liquidbounce(): { [key: string]: FontFace };
    /**
     * The glyph manager that is responsible for managing the glyph pages.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:112}
     */
    readonly glyphManager: FontGlyphPageManager;
    // private logger: Logger;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private addFontFace(fontFace: FontFace, $completion: Continuation<void>): any;
    closeGlyphManager(): void;
    createGlyphManager(): void;
    /**
     * Returns the font by the given name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/render/FontManager.kt:118}
     */
    fontFace(name: string): FontFace | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    queueFontFromFile(file: File, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    queueFontFromStream(stream: InputStream, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private systemFont(name: string, $completion: Continuation<FontFace>): any;
}