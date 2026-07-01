import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HuffmanState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanState.d.ts'
export abstract class HuffmanDecoder$DecoderState extends Object {
    constructor(arg0: any)
    available(): number;
    hasData(): boolean;
    read(arg0: number[], arg1: number, arg2: number): number;
    state(): HuffmanState;
}