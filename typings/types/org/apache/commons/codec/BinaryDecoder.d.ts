import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Decoder } from '../../../../org/apache/commons/codec/Decoder.d.ts'
export interface BinaryDecoder extends Object, Decoder{
    decode(arg0: number[]): number[];
}