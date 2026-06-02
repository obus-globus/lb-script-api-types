import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export abstract class AbstractCaverphone extends Object implements StringEncoder {
    constructor()
    encode(arg0: Object): Object;
    isEncodeEqual(arg0: string, arg1: string): boolean;
}