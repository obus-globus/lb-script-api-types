import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { FontDescription } from '../../../../../net/minecraft/network/chat/FontDescription.d.ts'
export class FontManager$CachedFontProvider$CachedEntry extends Record {
    private constructor(description: FontDescription, source: GlyphSource)
    // private description: FontDescription;
    // private source: GlyphSource;
    description(): FontDescription;
    equals(o: Object | null): boolean;
    hashCode(): number;
    source(): GlyphSource;
    toString(): string;
}