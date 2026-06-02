import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$Provider } from '../../../../../net/minecraft/client/gui/Font$Provider.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { FontManager$CachedFontProvider$CachedEntry } from '../../../../../net/minecraft/client/gui/font/FontManager$CachedFontProvider$CachedEntry.d.ts'
import type { EffectGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/EffectGlyph.d.ts'
import type { FontDescription } from '../../../../../net/minecraft/network/chat/FontDescription.d.ts'
export class FontManager$CachedFontProvider extends Object implements AutoCloseable, Font$Provider {
    private constructor(null_: FontManager$CachedFontProvider, nonFishyOnly: boolean)
    // private lastEntry: FontManager$CachedFontProvider$CachedEntry;
    // private nonFishyOnly: boolean;
    // private whiteGlyph: EffectGlyph;
    close(): void;
    effect(): EffectGlyph;
    // private getGlyphSource(description: FontDescription): GlyphSource;
    glyphs(description: FontDescription): GlyphSource;
    invalidate(): void;
}