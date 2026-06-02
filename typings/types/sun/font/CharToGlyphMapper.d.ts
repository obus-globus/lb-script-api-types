import type { Object } from '../../java/lang/Object.d.ts'
export abstract class CharToGlyphMapper extends Object {
    static HI_SURROGATE_END: number;
    static HI_SURROGATE_START: number;
    static INVISIBLE_GLYPHS: number;
    static INVISIBLE_GLYPH_ID: number;
    static LO_SURROGATE_END: number;
    static LO_SURROGATE_START: number;
    static UNINITIALIZED_GLYPH: number;
    static VSS_END: number;
    static VSS_START: number;
    static VS_END: number;
    static VS_START: number;
    static isVariationSelector(paramarg0: number): boolean;
    constructor()
    // private missingGlyph: number;
    canDisplay(arg0: string): boolean;
    canDisplay(arg0: number): boolean;
    charToGlyph(arg0: string): number;
    charToGlyph(arg0: number): number;
    charToGlyphRaw(arg0: number): number;
    charToVariationGlyph(arg0: number, arg1: number): number;
    charToVariationGlyphRaw(arg0: number, arg1: number): number;
    charsToGlyphs(arg0: number, arg1: string[], arg2: number[]): void;
    charsToGlyphs(arg0: number, arg1: number[], arg2: number[]): void;
    charsToGlyphsNS(arg0: number, arg1: string[], arg2: number[]): boolean;
    getMissingGlyphCode(): number;
    getNumGlyphs(): number;
}