import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
export class FontGlyph extends Record {
    constructor(codepoint: string, font: FontId)
    // private codepoint: string;
    /*not mapped: */ codepoint(): string;
    // private font: FontId;
    /*not mapped: */ font(): FontId;
    component1(): string;
    component2(): FontId;
    copy(codepoint: string, font: FontId): FontGlyph;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}