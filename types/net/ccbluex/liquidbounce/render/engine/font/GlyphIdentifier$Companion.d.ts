import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
export class GlyphIdentifier$Companion extends Object {
    asLong(codepoint: string, style: number): number;
    asLong(fontGlyph: FontGlyph): number;
    unpackCodepoint(longValue: number): string;
    unpackStyle(longValue: number): number;
}