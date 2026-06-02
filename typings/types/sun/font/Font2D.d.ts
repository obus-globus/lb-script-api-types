import type { Font } from '../../java/awt/Font.d.ts'
import type { FontRenderContext } from '../../java/awt/font/FontRenderContext.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { Reference } from '../../java/lang/ref/Reference.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharToGlyphMapper } from '../../sun/font/CharToGlyphMapper.d.ts'
import type { Font2DHandle } from '../../sun/font/Font2DHandle.d.ts'
import type { FontFamily } from '../../sun/font/FontFamily.d.ts'
import type { FontStrike } from '../../sun/font/FontStrike.d.ts'
import type { FontStrikeDesc } from '../../sun/font/FontStrikeDesc.d.ts'
export abstract class Font2D extends Object {
    static DEFAULT_RANK: number;
    static FONT_CONFIG_RANK: number;
    static FWEIGHT_BOLD: number;
    static FWEIGHT_NORMAL: number;
    static FWIDTH_NORMAL: number;
    static JRE_RANK: number;
    static NATIVE_RANK: number;
    static TTF_RANK: number;
    static TYPE1_RANK: number;
    static UNKNOWN_RANK: number;
    constructor()
    // private family: FontFamily;
    // private familyName: string;
    // private fontRank: number;
    // private fullName: string;
    handle: Font2DHandle;
    // private lastFontStrike: Reference<FontStrike>;
    // private mapper: CharToGlyphMapper;
    // private strikeCache: Map<FontStrikeDesc, Reference<FontStrike>>;
    // private strikeCacheMax: number;
    style: number;
    // private useWeak: boolean;
    canDisplay(arg0: string): boolean;
    canDisplay(arg0: number): boolean;
    canDoStyle(arg0: number): boolean;
    charToGlyph(arg0: number): number;
    charToGlyphRaw(arg0: number): number;
    charToVariationGlyph(arg0: number, arg1: number): number;
    charToVariationGlyphRaw(arg0: number, arg1: number): number;
    createStrike(arg0: FontStrikeDesc): FontStrike;
    getBaselineFor(arg0: string): number;
    getFamilyName(arg0: Locale): string;
    getFontMetrics(arg0: Font, arg1: FontRenderContext, arg2: number[]): void;
    getFontMetrics(arg0: Font, arg1: AffineTransform, arg2: Object, arg3: Object, arg4: number[]): void;
    getFontName(arg0: Locale): string;
    getItalicAngle(arg0: Font, arg1: AffineTransform, arg2: Object, arg3: Object): number;
    getMapper(): CharToGlyphMapper;
    getMissingGlyphCode(): number;
    getNumGlyphs(): number;
    getPlatformNativeFontPtr(): number;
    getPostscriptName(): string;
    getRank(): number;
    getStrike(arg0: Font): FontStrike;
    getStrike(arg0: Font, arg1: FontRenderContext): FontStrike;
    getStrike(arg0: Font, arg1: AffineTransform, arg2: AffineTransform, arg3: number, arg4: number): FontStrike;
    getStrike(arg0: Font, arg1: AffineTransform, arg2: number, arg3: number): FontStrike;
    getStrike(arg0: FontStrikeDesc): FontStrike;
    // private getStrike(arg0: FontStrikeDesc, arg1: boolean): FontStrike;
    getStyle(): number;
    getStyleMetrics(arg0: number, arg1: number[], arg2: number): void;
    getTableBytes(arg0: number): number[];
    getUnitsPerEm(): number;
    getValidatedGlyphCode(arg0: number): number;
    getWeight(): number;
    getWidth(): number;
    hasSupplementaryChars(): boolean;
    setRank(arg0: number): void;
    setStyle(): void;
    setUseWeakRefs(arg0: boolean, arg1: number): void;
    supportsEncoding(arg0: string): boolean;
    updateLastStrikeRef(arg0: FontStrike): void;
    useAAForPtSize(arg0: number): boolean;
}