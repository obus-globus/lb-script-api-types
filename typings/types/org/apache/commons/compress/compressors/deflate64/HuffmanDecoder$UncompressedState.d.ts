import type { HuffmanDecoder$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { HuffmanDecoder } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder.d.ts'
import type { HuffmanDecoder$DecoderState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder$DecoderState.d.ts'
import type { HuffmanState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanState.d.ts'
export class HuffmanDecoder$UncompressedState extends HuffmanDecoder$DecoderState {
    private constructor(null_: HuffmanDecoder, arg1: number)
    constructor(null_: HuffmanDecoder, arg1: number, arg2: HuffmanDecoder$1)
    // private blockLength: number;
    // private read: number;
    available(): number;
    hasData(): boolean;
    read(arg0: number[], arg1: number, arg2: number): number;
    state(): HuffmanState;
}