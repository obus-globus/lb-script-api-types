import type { BaseNCodec$Context } from '../../../../io/jsonwebtoken/impl/io/BaseNCodec$Context.d.ts'
import type { CodecPolicy } from '../../../../io/jsonwebtoken/impl/io/CodecPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BaseNCodec extends Object {
    static MIME_CHUNK_SIZE: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: CodecPolicy)
    // private chunkSeparatorLength: number;
    // private decodingPolicy: CodecPolicy;
    // private encodedBlockSize: number;
    // private lineLength: number;
    // private pad: number;
    // private unencodedBlockSize: number;
    available(arg0: BaseNCodec$Context): number;
    containsAlphabetOrPad(arg0: number[]): boolean;
    decode(arg0: number[]): number[];
    decode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    decode(arg0: string): number[];
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number, arg2: number): number[];
    encode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    encodeAsString(arg0: number[]): string;
    encodeToString(arg0: number[]): string;
    ensureBufferSize(arg0: number, arg1: BaseNCodec$Context): number[];
    getDefaultBufferSize(): number;
    getEncodedLength(arg0: number[]): number;
    hasData(arg0: BaseNCodec$Context): boolean;
    isInAlphabet(arg0: number): boolean;
    isInAlphabet(arg0: number[], arg1: boolean): boolean;
    isInAlphabet(arg0: string): boolean;
    isStrictDecoding(): boolean;
    readResults(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): number;
}