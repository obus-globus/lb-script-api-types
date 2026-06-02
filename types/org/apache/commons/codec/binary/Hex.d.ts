import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BinaryDecoder } from '../../../../../org/apache/commons/codec/BinaryDecoder.d.ts'
import type { BinaryEncoder } from '../../../../../org/apache/commons/codec/BinaryEncoder.d.ts'
export class Hex extends Object implements BinaryDecoder, BinaryEncoder {
    static DEFAULT_CHARSET: Charset;
    static DEFAULT_CHARSET_NAME: string;
    static decodeHex(paramarg0: string[]): number[];
    static decodeHex(paramarg0: string): number[];
    static decodeHex(paramarg0: string[], paramarg1: number[], paramarg2: number): number;
    static encodeHex(paramarg0: number[]): string[];
    static encodeHex(paramarg0: number[], paramarg1: boolean): string[];
    static encodeHex(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: boolean): string[];
    static encodeHex(paramarg0: ByteBuffer): string[];
    static encodeHex(paramarg0: ByteBuffer, paramarg1: boolean): string[];
    static encodeHex(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: string[], paramarg5: number): void;
    static encodeHexString(paramarg0: number[]): string;
    static encodeHexString(paramarg0: number[], paramarg1: boolean): string;
    static encodeHexString(paramarg0: ByteBuffer): string;
    static encodeHexString(paramarg0: ByteBuffer, paramarg1: boolean): string;
    constructor()
    constructor(arg0: Charset)
    constructor(arg0: string)
    readonly charset: Charset;
    decode(arg0: ByteBuffer): number[];
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    encode(arg0: ByteBuffer): number[];
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    getCharset(): Charset;
    getCharsetName(): string;
    toString(): string;
}