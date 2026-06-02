import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BinaryDecoder } from '../../../../../org/apache/commons/codec/BinaryDecoder.d.ts'
import type { BinaryEncoder } from '../../../../../org/apache/commons/codec/BinaryEncoder.d.ts'
import type { StringDecoder } from '../../../../../org/apache/commons/codec/StringDecoder.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class URLCodec extends Object implements BinaryDecoder, BinaryEncoder, StringDecoder, StringEncoder {
    static decodeUrl(paramarg0: number[]): number[];
    static encodeUrl(paramarg0: BitSet, paramarg1: number[]): number[];
    constructor()
    constructor(arg0: string)
    // private charset: string;
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    decode(arg0: string): string;
    decode(arg0: string, arg1: string): string;
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    encode(arg0: string): string;
    encode(arg0: string, arg1: string): string;
    getDefaultCharset(): string;
    getEncoding(): string;
}