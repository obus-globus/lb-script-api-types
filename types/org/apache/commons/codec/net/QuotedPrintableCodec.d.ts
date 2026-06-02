import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BinaryDecoder } from '../../../../../org/apache/commons/codec/BinaryDecoder.d.ts'
import type { BinaryEncoder } from '../../../../../org/apache/commons/codec/BinaryEncoder.d.ts'
import type { StringDecoder } from '../../../../../org/apache/commons/codec/StringDecoder.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class QuotedPrintableCodec extends Object implements BinaryDecoder, BinaryEncoder, StringDecoder, StringEncoder {
    static decodeQuotedPrintable(paramarg0: number[]): number[];
    static encodeQuotedPrintable(paramarg0: BitSet, paramarg1: number[]): number[];
    static encodeQuotedPrintable(paramarg0: BitSet, paramarg1: number[], paramarg2: boolean): number[];
    constructor()
    constructor(arg0: Charset)
    constructor(arg0: Charset, arg1: boolean)
    constructor(arg0: boolean)
    constructor(arg0: string)
    readonly charset: Charset;
    // private strict: boolean;
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    decode(arg0: string): string;
    decode(arg0: string, arg1: Charset): string;
    decode(arg0: string, arg1: string): string;
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    encode(arg0: string): string;
    encode(arg0: string, arg1: Charset): string;
    encode(arg0: string, arg1: string): string;
    getCharset(): Charset;
    getDefaultCharset(): string;
}