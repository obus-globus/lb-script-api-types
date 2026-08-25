import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontFace } from '../../../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
export class FontCharacterSet extends Object {
    static INSTANCE: FontCharacterSet;
    // private COMMON_HAN_COUNT: number;
    // private COMMON_HAN_RESOURCE: string;
    // private FONT_GLYPH_COMPARATOR: (param0: FontGlyph, param1: FontGlyph) => number;
    /**
     * First-level characters from the 2013 Table of General Standard Chinese Characters.
     *
     * Source data: https://github.com/jaywcjlove/table-of-general-standard-chinese-characters
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/FontCharacterSet.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/FontCharacterSet.kt:58}
     */
    readonly commonHanCodepoints: number[];
    readonly eagerCodepoints: number[];
    createCommonHanGlyphs(primaryFace: FontFace, fallbackFaces: FontFace[]): FontGlyph[];
    createEagerGlyphs(registeredFaces: FontFace[], primaryFace: FontFace, fallbackFaces: FontFace[]): FontGlyph[];
    // private resolveGlyphs(destination: FontGlyph[], requestedFace: FontFace, fallbackFaces: FontFace[], styles: number[], codepoints: number[]): void;
    // private resolveStaticFont(requestedFace: FontFace, fallbackFaces: FontFace[], style: number, codepoint: number): FontId | null;
}