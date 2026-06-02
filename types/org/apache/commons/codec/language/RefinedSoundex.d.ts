import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class RefinedSoundex extends Object implements StringEncoder {
    static US_ENGLISH: RefinedSoundex;
    static US_ENGLISH_MAPPING_STRING: string;
    constructor()
    constructor(arg0: string[])
    constructor(arg0: string)
    // private soundexMapping: string[];
    difference(arg0: string, arg1: string): number;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    getMappingCode(arg0: string): string;
    soundex(arg0: string): string;
}