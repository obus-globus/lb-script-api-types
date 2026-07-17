import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GlyphProvider } from '../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { GlyphProvider$Conditional } from '../../../../../com/mojang/blaze3d/font/GlyphProvider$Conditional.d.ts'
import type { UnbakedGlyph$Stitcher } from '../../../../../com/mojang/blaze3d/font/UnbakedGlyph$Stitcher.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { CodepointMap } from '../../../../../net/minecraft/client/gui/font/CodepointMap.d.ts'
import type { FontOption } from '../../../../../net/minecraft/client/gui/font/FontOption.d.ts'
import type { FontSet$SelectedGlyphs } from '../../../../../net/minecraft/client/gui/font/FontSet$SelectedGlyphs.d.ts'
import type { GlyphStitcher } from '../../../../../net/minecraft/client/gui/font/GlyphStitcher.d.ts'
import type { BakedGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { EffectGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/EffectGlyph.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class FontSet extends Object implements AutoCloseable {
    constructor(stitcher: GlyphStitcher)
    // private activeProviders: GlyphProvider[];
    // private allProviders: GlyphProvider$Conditional[];
    // private anyGlyphs: GlyphSource;
    glyphCache: CodepointMap<FontSet$SelectedGlyphs>;
    // private glyphGetter: (param0: number) => FontSet$SelectedGlyphs;
    // private glyphsByWidth: JavaMap<any, any>;
    // private missingGlyph: BakedGlyph;
    // private missingGlyphGetter: () => BakedGlyph;
    // private missingSelectedGlyphs: FontSet$SelectedGlyphs;
    // private nonFishyGlyphs: GlyphSource;
    // private stitcher: GlyphStitcher;
    // private viaFabricPlus$blankBakedGlyph1_12_2: BakedGlyph;
    // private viaFabricPlus$blankBakedGlyphPair1_12_2: FontSet$SelectedGlyphs;
    // private viaFabricPlus$obfuscatedLookup: boolean;
    // private whiteGlyph: EffectGlyph;
    // private wrappedStitcher: UnbakedGlyph$Stitcher;
    close(): void;
    // private computeGlyphInfo(codepoint: number): FontSet$SelectedGlyphs;
    // private getGlyph(codepoint: number): FontSet$SelectedGlyphs;
    getRandomGlyph(random: RandomSource, width: number): BakedGlyph;
    reload(providers: GlyphProvider$Conditional[], options: FontOption[]): void;
    reload(options: FontOption[]): void;
    // private resetTextures(): void;
    // private selectProviders(providers: GlyphProvider$Conditional[], options: FontOption[]): GlyphProvider[];
    source(nonFishyOnly: boolean): GlyphSource;
    // private viaFabricPlus$shouldBeInvisible(arg0: number): boolean;
    whiteGlyph(): EffectGlyph;
}