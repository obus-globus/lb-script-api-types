import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlyphSource } from '../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { EffectGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/EffectGlyph.d.ts'
import type { FontDescription } from '../../../../net/minecraft/network/chat/FontDescription.d.ts'
export interface Font$Provider extends Object{
    effect(): EffectGlyph;
    glyphs(font: FontDescription): GlyphSource;
}