import type { Base64$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base64$Builder } from '../../../../../org/apache/commons/codec/binary/Base64$Builder.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$Context.d.ts'
export class Base64 extends BaseNCodec {
    static MIME_CHUNK_SIZE: number;
    static PEM_CHUNK_SIZE: number;
    static builder(): Base64$Builder;
    static decodeBase64(paramarg0: number[]): number[];
    static decodeBase64(paramarg0: string): number[];
    static decodeBase64Standard(paramarg0: number[]): number[];
    static decodeBase64Standard(paramarg0: string): number[];
    static decodeBase64UrlSafe(paramarg0: number[]): number[];
    static decodeBase64UrlSafe(paramarg0: string): number[];
    static decodeInteger(paramarg0: number[]): BigInteger;
    static encodeBase64(paramarg0: number[]): number[];
    static encodeBase64(paramarg0: number[], paramarg1: boolean): number[];
    static encodeBase64(paramarg0: number[], paramarg1: boolean, paramarg2: boolean): number[];
    static encodeBase64(paramarg0: number[], paramarg1: boolean, paramarg2: boolean, paramarg3: number): number[];
    static encodeBase64Chunked(paramarg0: number[]): number[];
    static encodeBase64String(paramarg0: number[]): string;
    static encodeBase64URLSafe(paramarg0: number[]): number[];
    static encodeBase64URLSafeString(paramarg0: number[]): string;
    static encodeInteger(paramarg0: BigInteger): number[];
    static getChunkSeparator(): number[];
    static isArrayByteBase64(paramarg0: number[]): boolean;
    static isBase64(paramarg0: number): boolean;
    static isBase64(paramarg0: number[]): boolean;
    static isBase64(paramarg0: string): boolean;
    static isBase64Standard(paramarg0: number): boolean;
    static isBase64Standard(paramarg0: number[]): boolean;
    static isBase64Standard(paramarg0: string): boolean;
    static isBase64Url(paramarg0: number): boolean;
    static isBase64Url(paramarg0: number[]): boolean;
    static isBase64Url(paramarg0: string): boolean;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number[], arg2: boolean)
    constructor(arg0: number, arg1: number[], arg2: boolean, arg3: CodecPolicy)
    private constructor(arg0: Base64$Builder)
    constructor(arg0: Base64$Builder, arg1: Base64$1)
    // private encodeSize: number;
    // private isStandardEncodeTable: boolean;
    // private isUrlSafe: boolean;
    // private lineSeparator: number[];
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    decode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    decode(arg0: string): number[];
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number, arg2: number): number[];
    encode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    getLineSeparator(): number[];
    isInAlphabet(arg0: number): boolean;
    isInAlphabet(arg0: number[], arg1: boolean): boolean;
    isInAlphabet(arg0: string): boolean;
    isUrlSafe(): boolean;
    // private validateCharacter(arg0: number, arg1: BaseNCodec$Context): void;
    // private validateTrailingCharacter(): void;
}