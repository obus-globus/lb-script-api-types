import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { StringDecoder } from '../../../../../org/apache/commons/codec/StringDecoder.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
import type { RFC1522Codec } from '../../../../../org/apache/commons/codec/net/RFC1522Codec.d.ts'
export class BCodec extends RFC1522Codec implements StringDecoder, StringEncoder {
    constructor()
    constructor(arg0: Charset)
    constructor(arg0: Charset, arg1: CodecPolicy)
    constructor(arg0: string)
    // private decodingPolicy: CodecPolicy;
    decode(arg0: Object): Object;
    decode(arg0: string): string;
    doDecoding(arg0: number[]): number[];
    doEncoding(arg0: number[]): number[];
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    encode(arg0: string, arg1: Charset): string;
    encode(arg0: string, arg1: string): string;
    getEncoding(): string;
    isStrictDecoding(): boolean;
}