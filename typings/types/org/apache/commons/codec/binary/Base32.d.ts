import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base32$Builder } from '../../../../../org/apache/commons/codec/binary/Base32$Builder.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$Context.d.ts'
export class Base32 extends BaseNCodec {
    static MIME_CHUNK_SIZE: number;
    static PEM_CHUNK_SIZE: number;
    static builder(): Base32$Builder;
    static getChunkSeparator(): number[];
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number[], arg2: boolean)
    constructor(arg0: number, arg1: number[], arg2: boolean, arg3: number)
    constructor(arg0: number, arg1: number[], arg2: boolean, arg3: number, arg4: CodecPolicy)
    private constructor(arg0: number, arg1: number[], arg2: number[], arg3: number, arg4: CodecPolicy)
    // private decodeTable: number[];
    // private encodeSize: number;
    // private encodeTable: number[];
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
    // private validateCharacter(arg0: number, arg1: BaseNCodec$Context): void;
    // private validateTrailingCharacters(): void;
}