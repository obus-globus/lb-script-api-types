import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class Nysiis extends Object implements StringEncoder {
    constructor()
    constructor(arg0: boolean)
    readonly strict: boolean;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    isStrict(): boolean;
    nysiis(arg0: string): string;
}