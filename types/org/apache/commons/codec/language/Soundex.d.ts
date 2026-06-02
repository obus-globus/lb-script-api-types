import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class Soundex extends Object implements StringEncoder {
    static SILENT_MARKER: string;
    static US_ENGLISH: Soundex;
    static US_ENGLISH_GENEALOGY: Soundex;
    static US_ENGLISH_MAPPING_STRING: string;
    static US_ENGLISH_SIMPLIFIED: Soundex;
    constructor()
    constructor(arg0: string[])
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    readonly maxLength: number;
    // private soundexMapping: string[];
    // private specialCaseHW: boolean;
    difference(arg0: string, arg1: string): number;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    getMaxLength(): number;
    // private hasMarker(arg0: string[]): boolean;
    // private map(arg0: string): string;
    setMaxLength(arg0: number): void;
    soundex(arg0: string): string;
}