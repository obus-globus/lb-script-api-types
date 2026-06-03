import type { BaseNCodec } from '../../../../io/jsonwebtoken/impl/io/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../io/jsonwebtoken/impl/io/BaseNCodec$Context.d.ts'
import type { CodecPolicy } from '../../../../io/jsonwebtoken/impl/io/CodecPolicy.d.ts'
export class Base64Codec extends BaseNCodec {
    static MIME_CHUNK_SIZE: number;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number[], arg2: boolean)
    constructor(arg0: number, arg1: number[], arg2: boolean, arg3: CodecPolicy)
    // private decodeSize: number;
    // private decodeTable: number[];
    // private encodeSize: number;
    // private encodeTable: number[];
    // private lineSeparator: number[];
    decode(arg0: number[]): number[];
    decode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    decode(arg0: string): number[];
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number, arg2: number): number[];
    encode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    isInAlphabet(arg0: number): boolean;
    isInAlphabet(arg0: number[], arg1: boolean): boolean;
    isInAlphabet(arg0: string): boolean;
    isUrlSafe(): boolean;
    // private validateCharacter(arg0: number, arg1: BaseNCodec$Context): void;
    // private validateTrailingCharacter(): void;
}