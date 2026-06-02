import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Decoder } from '../../../../org/apache/commons/codec/Decoder.d.ts'
export interface StringDecoder extends Object, Decoder{
    decode(arg0: string): string;
}