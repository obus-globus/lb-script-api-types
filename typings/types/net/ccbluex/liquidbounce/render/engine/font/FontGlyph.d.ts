import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
export class FontGlyph extends Record {
    constructor(codepoint: number, font: FontId)
    // private codepoint: number;
    /*not mapped: */ codepoint(): number;
    // private font: FontId;
    /*not mapped: */ font(): FontId;
    component1(): number;
    component2(): FontId;
    copy(codepoint: number, font: FontId): FontGlyph;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}