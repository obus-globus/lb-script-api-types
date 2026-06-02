import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphDescriptor } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphDescriptor.d.ts'
export class FontGlyphPageManager$FontGlyphRegistry extends Object {
    constructor(glyphs: Char2ObjectOpenHashMap<GlyphDescriptor>[], fallbackGlyph: GlyphDescriptor)
    fallbackGlyph: GlyphDescriptor;
    glyphs: Char2ObjectOpenHashMap<GlyphDescriptor>[];
}