import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Base58$Builder } from '../../../../../org/apache/commons/codec/binary/Base58$Builder.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$Context.d.ts'
export class Base58 extends BaseNCodec {
    static MIME_CHUNK_SIZE: number;
    static PEM_CHUNK_SIZE: number;
    static builder(): Base58$Builder;
    static getChunkSeparator(): number[];
    constructor()
    constructor(arg0: Base58$Builder)
    // private convertFromBase58(arg0: number[], arg1: BaseNCodec$Context): void;
    // private convertToBase58(arg0: number[], arg1: BaseNCodec$Context): number[];
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    decode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    decode(arg0: string): number[];
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number, arg2: number): number[];
    encode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    // private getStringBuilder(arg0: number[]): StringBuilder;
    isInAlphabet(arg0: number): boolean;
    isInAlphabet(arg0: number[], arg1: boolean): boolean;
    isInAlphabet(arg0: string): boolean;
}