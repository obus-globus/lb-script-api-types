import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontFace } from '../../../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
export class FontGlyphPageManagerKt extends Object {
    static resolveFont(requestedFace: FontFace, fallbackFaces: FontFace[], style: number, codepoint: number): FontId;
}