import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
import type { Caverphone2 } from '../../../../../org/apache/commons/codec/language/Caverphone2.d.ts'
export class Caverphone extends Object implements StringEncoder {
    constructor()
    // private encoder: Caverphone2;
    caverphone(arg0: string): string;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    isCaverphoneEqual(arg0: string, arg1: string): boolean;
}