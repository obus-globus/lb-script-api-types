import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { GlyphIdentifier$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphIdentifier$Companion.d.ts'
export class GlyphIdentifier extends Record {
    static Companion: GlyphIdentifier$Companion;
    static asLong(paramarg0: string, paramarg1: number): number;
    static asLong(paramarg0: FontGlyph): number;
    static unpackCodepoint(paramarg0: number): string;
    static unpackStyle(paramarg0: number): number;
    constructor(codepoint: string, style: number)
    constructor(longValue: number)
    constructor(fontGlyph: FontGlyph)
    // private codepoint: string;
    /*not mapped: */ codepoint(): string;
    // private style: number;
    /*not mapped: */ style(): number;
    asLong(): number;
    component1(): string;
    component2(): number;
    copy(codepoint: string, style: number): GlyphIdentifier;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}