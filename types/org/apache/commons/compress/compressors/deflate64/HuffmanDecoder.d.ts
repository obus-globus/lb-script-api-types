import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HuffmanDecoder$DecoderState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder$DecoderState.d.ts'
import type { HuffmanDecoder$DecodingMemory } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder$DecodingMemory.d.ts'
import type { BitInputStream } from '../../../../../../org/apache/commons/compress/utils/BitInputStream.d.ts'
export class HuffmanDecoder extends Object implements Closeable {
    constructor(arg0: InputStream)
    // private finalBlock: boolean;
    // private in: InputStream;
    // private memory: HuffmanDecoder$DecodingMemory;
    // private reader: BitInputStream;
    // private state: HuffmanDecoder$DecoderState;
    available(): number;
    close(): void;
    decode(arg0: number[]): number;
    decode(arg0: number[], arg1: number, arg2: number): number;
    getBytesRead(): number;
    // private readBits(arg0: number): number;
    // private readDynamicTables(): number[][];
    // private switchToUncompressedState(): void;
}