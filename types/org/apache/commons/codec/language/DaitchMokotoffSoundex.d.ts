import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class DaitchMokotoffSoundex extends Object implements StringEncoder {
    constructor()
    constructor(arg0: boolean)
    // private folding: boolean;
    // private cleanup(arg0: string): string;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    soundex(arg0: string): string;
    // private soundex(arg0: string, arg1: boolean): string[];
}