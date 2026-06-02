import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BinaryDecoder } from '../../../../../org/apache/commons/codec/BinaryDecoder.d.ts'
import type { BinaryEncoder } from '../../../../../org/apache/commons/codec/BinaryEncoder.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { BaseNCodec$Context } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$Context.d.ts'
export abstract class BaseNCodec extends Object implements BinaryDecoder, BinaryEncoder {
    static MIME_CHUNK_SIZE: number;
    static PEM_CHUNK_SIZE: number;
    static getChunkSeparator(): number[];
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: CodecPolicy)
    // private PAD: number;
    // private chunkSeparatorLength: number;
    // private decodingPolicy: CodecPolicy;
    // private encodedBlockSize: number;
    // private lineLength: number;
    // private pad: number;
    // private unencodedBlockSize: number;
    available(arg0: BaseNCodec$Context): number;
    containsAlphabetOrPad(arg0: number[]): boolean;
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    decode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    decode(arg0: string): number[];
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number, arg2: number): number[];
    encode(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): void;
    encodeAsString(arg0: number[]): string;
    encodeToString(arg0: number[]): string;
    ensureBufferSize(arg0: number, arg1: BaseNCodec$Context): number[];
    getCodecPolicy(): CodecPolicy;
    getDefaultBufferSize(): number;
    getEncodedLength(arg0: number[]): number;
    hasData(arg0: BaseNCodec$Context): boolean;
    isInAlphabet(arg0: number): boolean;
    isInAlphabet(arg0: number[], arg1: boolean): boolean;
    isInAlphabet(arg0: string): boolean;
    isStrictDecoding(): boolean;
    readResults(arg0: number[], arg1: number, arg2: number, arg3: BaseNCodec$Context): number;
}