import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
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
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number[], arg2: boolean)
    constructor(arg0: number, arg1: number[], arg2: boolean, arg3: CodecPolicy)
    private constructor(arg0: number, arg1: number[], arg2: number, arg3: number[], arg4: CodecPolicy)
    // private decodeTable: number[];
    // private encodeSize: number;
    // private encodeTable: number[];
    // private isUrlSafe: boolean;
    // private lineSeparator: number[];
    // private calculateDecodeTable(arg0: number[]): number[];
    decode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    encode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    getLineSeparator(): number[];
    isInAlphabet(arg0: number): boolean;
    isUrlSafe(): boolean;
    // private validateCharacter(arg0: number, arg1: BaseNCodec$Context): void;
    // private validateTrailingCharacter(): void;
}