import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ProcessedText$ProcessedChar extends Record {
    constructor(codepoint: number, font: number, obfuscated: boolean, color: Color4b)
    // private codepoint: number;
    /*not mapped: */ codepoint(): number;
    // private color: Color4b;
    /*not mapped: */ color(): Color4b;
    // private font: number;
    /*not mapped: */ font(): number;
    // private obfuscated: boolean;
    /*not mapped: */ obfuscated(): boolean;
    component1(): number;
    component2(): number;
    component3(): boolean;
    component4(): Color4b;
    copy(codepoint: number, font: number, obfuscated: boolean, color: Color4b): ProcessedText$ProcessedChar;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}