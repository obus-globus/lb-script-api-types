import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base16$Builder } from '../../../../../org/apache/commons/codec/binary/Base16$Builder.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$Context.d.ts'
export class Base16 extends BaseNCodec {
    static MIME_CHUNK_SIZE: number;
    static PEM_CHUNK_SIZE: number;
    static builder(): Base16$Builder;
    static getChunkSeparator(): number[];
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: CodecPolicy)
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    decode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    decode(arg0: string): number[];
    // private decodeOctet(arg0: number): number;
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number, arg2: number): number[];
    encode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    isInAlphabet(arg0: number): boolean;
    isInAlphabet(arg0: number[], arg1: boolean): boolean;
    isInAlphabet(arg0: string): boolean;
    // private validateTrailingCharacter(): void;
}