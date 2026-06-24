import type { HuffmanDecoder$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HuffmanState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanState.d.ts'
export abstract class HuffmanDecoder$DecoderState extends Object {
    private constructor()
    constructor(arg0: HuffmanDecoder$1)
    available(): number;
    hasData(): boolean;
    read(arg0: number[], arg1: number, arg2: number): number;
    state(): HuffmanState;
}