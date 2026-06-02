import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class ColognePhonetic extends Object implements StringEncoder {
    constructor()
    colognePhonetic(arg0: string): string;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    isEncodeEqual(arg0: string, arg1: string): boolean;
    // private preprocess(arg0: string): string[];
}