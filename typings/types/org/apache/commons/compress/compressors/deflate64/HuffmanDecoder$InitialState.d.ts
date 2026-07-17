import type { HuffmanDecoder$DecoderState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder$DecoderState.d.ts'
import type { HuffmanState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanState.d.ts'
export class HuffmanDecoder$InitialState extends HuffmanDecoder$DecoderState {
    private constructor()
    available(): number;
    hasData(): boolean;
    read(arg0: number[], arg1: number, arg2: number): number;
    state(): HuffmanState;
}